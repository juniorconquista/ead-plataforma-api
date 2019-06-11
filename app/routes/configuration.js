import * as controller from "../controllers/configuration.js";

module.exports = application => {
  application.get("/configuration", (req, res) => controller.list(req, res));
  application.put("/configuration/:_id", (req, res) =>
    controller.create(req, res)
  );
};
