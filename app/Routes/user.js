import * as controller from "../controllers/user";

module.exports = application => {
  application.post("/user/login", (req, res) => controller.login(req, res));
  application.post("/user/create", (req, res) => controller.create(req, res));
};
