import mongoose from "mongoose";

mongoose.connect("mongodb://admin:rarolabs@127.0.0.1:27017/webinar-ead", {
  useCreateIndex: true,
  useNewUrlParser: true
});

// mongoose.connect("mongodb://ead-plataforma:Juninho10@ds145786.mlab.com:45786/heroku_nqnvx644", {
//   useCreateIndex: true,
//   useNewUrlParser: true
// });

mongoose.connection.on("connected", () =>
  console.log("Mongoose default connection open to webinar-ead")
);

// If the connection throws an error
mongoose.connection.on("error", err =>
  console.log("Mongoose default connection error: " + err)
);

// When the connection is disconnected
mongoose.connection.on("disconnected", () =>
  console.log("Mongoose default connection disconnected")
);

process.on("SIGINT", () =>
  mongoose.connection.close(() => {
    console.log(
      "Mongoose default connection disconnected through app termination"
    );
    process.exit(0);
  })
);

module.exports = { mongoose };
