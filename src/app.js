const express = require("express");
const http = require("http");
const cors = require("cors");
const corsConfig = require("./config/cors");
const socketIoConfig = require("./config/socketio");
const setupSocketIo = require("./services/socket");
const indexRoutes = require("./routes/index");

const app = express();
const server = http.createServer(app);
const io = require("socket.io")(server, socketIoConfig);

// Use CORS middleware
app.use(cors(corsConfig));

// Set up routes
app.use("/", indexRoutes);

// Initialize Socket.IO with configured options
setupSocketIo(io);

// Define the port for the server
const PORT = process.env.PORT || 3000;

// Start the server and listen for incoming requests
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
