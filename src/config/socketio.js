const socketIo = require("socket.io");
const { allowedHeaders } = require("./cors");

const socketIoOptions = {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        allowedHeaders: ["Content-Type"],
    },
    pingInterval: 10000,
    pingTimeout: 5000,
    reconnection: true,
    reconnectionAttempts: Infinity,
};

module.exports = socketIoOptions;
