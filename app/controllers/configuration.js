import * as services from "../service/configuration";

export const list = (_, res) =>
  services
    .list()
    .then(response => res.json(response[0]))
    .catch(err => res.status(400).json({ message: err.message }));

export const create = (req, res) =>
  services
    .create(req.params._id, req.body)
    .then(response => {
      res.json(response);
    })
    .catch(err => res.status(400).json({ message: err.message }));
