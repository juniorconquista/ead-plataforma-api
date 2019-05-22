import * as services from "../service/status";

export const listStatus = (_, res) =>
  services
    .listStatus()
    .then(response => res.json(response))
    .catch(err => res.status(400).json({ message: err.message }));

export const setStatus = (req, res) =>
  services
    .setStatus(req.body)
    .then(() => res.json("ok"))
    .catch(err => res.status(400).json({ message: err.message }));

export const deleteStatus = (req, res) =>
  services
    .deleteStatus(req.params.uuid)
    .then(() => res.json("ok"))
    .catch(err => res.status(400).json({ message: err.message }));
