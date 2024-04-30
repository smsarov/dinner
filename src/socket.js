import {io} from 'socket.io-client'

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
// const socket = io('http://localhost:8000');

export {socket}