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

  onUpdateUserList(callback: (users: IUserOnMeet[]) => void) {
    this.socket.on(
      `${this._link}-update-user-list`,
      ({users}: {users: IUserOnMeet[]}) => {
        callback(users);
        console.log('users', users);
      },
    );
  }
}

export const createPeerConnectionContext = () => {
  const socket = io(WS_URL);
  return new PeerConnectionSession(socket);
};
