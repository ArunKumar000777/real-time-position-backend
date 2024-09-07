const users = {}; // This could be moved to a separate file or database in production

// Handles location updates
const updateLocation = (socket, location) => {
    console.log(`Received location from ${socket.id}:`, location);
    users[socket.id] = location;
    socket.broadcast.emit("location-update", { id: socket.id, location });
};

// Handles user disconnection
const handleDisconnect = (socket) => {
    console.log(`User disconnected: ${socket.id}`);
    delete users[socket.id];
    socket.broadcast.emit("user-disconnected", { id: socket.id });
};

module.exports = {
    updateLocation,
    handleDisconnect,
};
