// import express from "express";
// const app = express();
// const port = 3001;

// app.get("/api", (req, res) => {
//   res.json({ message: "Hello from Node.js server!" });
// });

// app.listen(port, () => {
//   console.log(`Server is running on http://localhost:${port}`);
// });

import express from "express";
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors()); // CORS middleware

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("New client connected");

  socket.on("sendMessage", (message) => {
    io.emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
