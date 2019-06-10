const app = require("./app/config/server");

const port = 3003;
const server = app.listen(port, () =>
  console.log("The Mobile API is now running at http://localhost:" + port)
);

const io = require("socket.io").listen(server);
app.set("io", io);

io.on("connection", socket => {
  io.sockets.emit("chat|count|users", Object.keys(io.engine.clients).length);
  socket.on("disconnect", () => {
    io.sockets.emit("chat|count|users", Object.keys(io.engine.clients).length);
  });
});
