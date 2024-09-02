import dotenv from 'dotenv'


dotenv.config({
    path: '.env.local'
})

export default{
    socketKey: import.meta.env.SOCKET_KEY,
    socketURL: import.meta.env.SOCKET_URL,
    converURL: import.meta.env.CONVER_URL
}
