import { io } from 'socket.io-client';

class SocketioService {
    socket;
    constructor() {}

    setupSocketConnection() {
        this.socket = io(process.env.VUE_APP_SOCKET_ENDPOINT);
    }
    disconnect() {
        if (this.socket) {
            this.socket.disconnect();
        }
    }
    emitLeave(username) {
        this.socket.emit('leave', username);
    }
    listenChatMessage() {
        let messages;
        this.socket.on('chat-message', (data) => {
            messages.push({
                message: data.message,
                type: 1,
                user: data.user,
            });
        });
            return messages;
    }
}

export default new SocketioService();
