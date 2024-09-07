const { updateLocation, handleDisconnect } = require("../controllers/location");

const setupSocketIo = (io) => {
    io.on("connection", (socket) => {
        console.log(`New user connected: ${socket.id}`);

        socket.on("update-location", (location) => {
            updateLocation(socket, location);
        });

        socket.on("disconnect", () => {
            handleDisconnect(socket);
        });
    });
};

module.exports = setupSocketIo;
