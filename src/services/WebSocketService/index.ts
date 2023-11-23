import { Socket, io } from 'socket.io-client'
import { WS_URL } from '@env'
import { DefaultEventsMap } from 'socket.io/dist/typed-events'
import { RTCPeerConnection, RTCSessionDescription } from 'react-native-webrtc';

export interface IJoin {
    userId: string,
    link: string
}

export interface IMove {
    x?: number;
    y?: number;
    orientation?: string;
}

export interface IUserOnMeet {
    _id: string,
    meet: string;
    user: string;
    clientId: string;
    name: string;
    avatar: string;
    x: number;
    y: number;
    orientation: string;
    muted: boolean;
}

const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1)
}

class PeerConnectionSession {
    socket: Socket<DefaultEventsMap, DefaultEventsMap>
    _link: string = ''
    _userId: string = ''
    peerConnections = {} as any
    senders = [] as any
    listeners = [] as any
    ons = [] as any

    constructor(socket: Socket<DefaultEventsMap, DefaultEventsMap>) {
        this.socket = socket
    }

    joinRoom(data: IJoin) {
        this._link = data.link
        this._userId = data.userId
        this.socket.emit('join', data)
    }

    updateUserMovement(data: IMove) {
        console.log('enviando', { link: this._link, userId: this._userId, ...data })
        this.socket.emit('move', { link: this._link, userId: this._userId, ...data })
    }

    onUpdateUserList(callback: (users: IUserOnMeet[]) => void) {
        this.socket.on(`${this._link}-update-user-list`, ({ users }: { users: IUserOnMeet[] }) => {
            callback(users)
        })
    }

    updateUserMute(muted: boolean) {
        this.socket.emit('toggl-mute-user', { link: this._link, userId: this._userId, muted })
    }

    addPeerConnection(clientId: string, localStream : any, callback: any){
        if(!this.peerConnections[clientId]){

            this.peerConnections[clientId] = new RTCPeerConnection({
                iceServers: [{urls: 'stun:stun.l.google.com:19302'}]
            });

            localStream.getTracks().forEach((track: any) => {
                this.senders.push(this.peerConnections[clientId].addTrack(track, localStream));
            });

            this.listeners[clientId] = (event: any) => {
                const on = '_on' + capitalizeFirstLetter(this.peerConnections[clientId].connectionState);
                const fn = this.ons[on];
                fn && fn(event, clientId);
            }

            this.peerConnections[clientId].addEventListener('connectionstatechange', this.listeners[clientId]);

            this.peerConnections[clientId].ontrack = ({streams: [stream]} : any) => {
                callback(stream);
            }
        }
    }

    onRemoveUser(callback: (socketId: string) => void) {
        this.socket.on(`${this._link}-remove-user`, ({ socketId }: any) => {
            callback(socketId)
        })
    }

    removePeerConnection(clientId: string) {
        if (this.peerConnections[clientId]) {
            this.peerConnections[clientId].removeEventListener('connectionstatechange', this.listeners[clientId])
            delete this.peerConnections[clientId]
            delete this.listeners[clientId]
        }
    }

    onAddUser(callback: (clientId: string) => void) {
        this.socket.on(`${this._link}-add-user`, ({ clientId }: any) => {
            callback(clientId)
        })
    }

    async callUser(clientId: string) {
        if (this.peerConnections[clientId]?.iceConnectionState === 'new') {
            let sessionConstraints = {
                mandatory: {
                    OfferToReceiveAudio: true,
                    OfferToReceiveVideo: true,
                    VoiceActivityDetection: true
                }
            };

            const offerDescription = await this.peerConnections[clientId].createOffer(sessionConstraints);
            await this.peerConnections[clientId].setLocalDescription(offerDescription);
            this.socket.emit('call-user', { offerDescription, clientId, link: this._link })
        }
    }

    onCallMade() {
        this.socket.on('call-made', async (data: { offer: any, socket: string }) => {
            console.log('call-made', data.socket)
            const selectedPeer = this.peerConnections[data.socket]

            if (selectedPeer) {
                await selectedPeer.setRemoteDescription(new RTCSessionDescription(data.offer))
                const answer = await selectedPeer.createAnswer()
                await selectedPeer.setLocalDescription(new RTCSessionDescription(answer))

                this.socket.emit('make-answer', {
                    answer,
                    to: data.socket
                })
                console.log('make-answer realizado')
            }
        })
    }

    onAnswerMade(callback: any){
        this.socket.on('answer-made', async (data: { answer: any, socket: string }) => {
            console.log('answer made', data.socket)
            await this.peerConnections[data.socket].setRemoteDescription(new RTCSessionDescription(data.answer))
            callback(data.socket)
        })
    }
}

export const createPeerConnectionContext = () => {
    const socket = io(WS_URL)
    return new PeerConnectionSession(socket)
}