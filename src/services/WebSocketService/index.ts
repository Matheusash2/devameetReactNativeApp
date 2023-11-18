import {io, Socket} from 'socket.io-client';
import {WS_URL} from '@env';
import {DefaultEventsMap} from 'socket.io/dist/typed-events';

export interface IJoin {
  userId: string;
  link: string;
}

export interface IUserOnMeet {
  _id: string;
  meet: string;
  user: string;
  name: string;
  avatar: string;
  clientId: string;
  x: number;
  y: number;
  orientation: string;
  muted: boolean;
}

export interface IMove {
  x?: number;
  y?: number;
  orientation?: string;
}

class PeerConnectionSession {
  socket: Socket<DefaultEventsMap, DefaultEventsMap>;
  _link: string = '';
  _userId: string = '';

  constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
    this.socket = socket;
  }

  joinRoom(data: IJoin) {
    this._link = data.link;
    this._userId = data.userId;
    this.socket.emit('join', data);
    console.log('data ', data);
  }
  updateUserMoviment(data: IMove) {
    this.socket.emit('move', {link: this._link, userId: this._userId, ...data});
  }

  onUpdateUserList(callback: (users: IUserOnMeet[]) => void) {
    this.socket.on(
      `${this._link}-update-user-list`,
      ({users}: {users: IUserOnMeet[]}) => {
        callback(users);
        console.log('users', users);
      },
    );
  }

  updateToggleMute(muted: boolean) {
    this.socket.emit('toggl-mute-user', {
      link: this._link,
      userId: this._userId,
      muted,
    });
  }
}

export const createPeerConnectionContext = () => {
  const socket = io(WS_URL);
  return new PeerConnectionSession(socket);
};
