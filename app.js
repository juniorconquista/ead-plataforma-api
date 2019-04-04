const app = require("./config/server");

const port = 9000;
app.listen(port, () =>
  console.log("\nThe Mobile API is now running at http://localhost:" + port)
);
