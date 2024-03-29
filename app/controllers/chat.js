import * as services from "../service/chat";

export const list = (_, res) =>
  services
    .list()
    .then(response => res.json(response))
    .catch(err => res.status(400).json({ message: err.message }));

export const statusMessage = (application, req, res) =>
  services
    .statusMessage(req.params._id, req.body.status)
    .then(response => {
      res.json(response);
      application.get("io").emit("chat|message|update", response);
    })
    .catch(err => res.status(400).json({ message: err.message }));

export const sendMessage = (application, req, res) =>
  services
    .sendMessage(req.body)
    .then(response => {
      res.status(200).json("ok");
      application.get("io").emit("chat|message|receive", response);
    })
    .catch(err => res.status(400).json({ message: err.message }));

    