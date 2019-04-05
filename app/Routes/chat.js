import * as controller from "../controllers/chat";

module.exports = application => {
  application.get("/chat/list", (req, res) => controller.list(req, res));
  application.post("/chat/send-message", (req, res) =>
    controller.sendMessage(application, req, res)
  );
};
