import * as services from "../service/chat";

export const list = (_, res) =>
  services
    .list()
    .then(response => res.json(response))
    .catch(err => res.status(400).json({ message: err.message }));

export const approvedMessage = (req, res) =>
  services
    .approvedMessage(req.params._id)
    .then(response => res.json(response))
    .catch(err => res.status(400).json({ message: err.message }));

export const sendMessage = (application, req, res) =>
  services
    .sendMessage(req.body)
    .then(response => {
      res.status(200).json("ok");
      application.get("io").emit("chat|message|receive", response);
    })
    .catch(err => res.status(400).json({ message: err.message }));
