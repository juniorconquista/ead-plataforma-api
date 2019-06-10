import * as controller from "../controllers/status";

module.exports = application => {
  application.get("/status", (req, res) => controller.listStatus(req, res));
  application.post("/status", (req, res) => controller.setStatus(req, res));
  application.delete("/status/:uuid", (req, res) =>
    controller.deleteStatus(req, res)
  );
};
