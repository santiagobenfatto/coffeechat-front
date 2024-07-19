import { io } from 'socket.io-client'

export const socket = io('http://localhost:3001', {
    reconnectionDelayMax: 10000,
    autoConnect: false,
    withCredentials: true
})
