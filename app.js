const app = require("./app/config/server");

const port = process.env.PORT || 9000;
const server = app.listen(port, () =>
  console.log("The Mobile API is now running at http://localhost:" + port)
);

const io = require("socket.io").listen(server);
app.set("io", io);

io.on("connection", socket => {
  io.sockets.emit("chat|count|users", Object.keys(io.engine.clients).length);
  socket.on("slide|previous", page => {
    io.sockets.emit("slide|previous|page", page);
  });
  socket.on("slide|next", page => {
    io.sockets.emit("slide|next|page", page);
  });
});
