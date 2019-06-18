import * as controller from "../controllers/slide";

module.exports = application => {
  application.post("/slide/upload", (req, res) => controller.upload(req, res));
  application.get("/slide", (req, res) => controller.list(req, res));
  application.get("/files", (req, res) => controller.files(req, res));
};
