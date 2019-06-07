import * as services from "../service/configuration";

export const list = (_, res) =>
  services
    .list()
    .then(response => res.json(response[0]))
    .catch(err => res.status(400).json({ message: err.message }));
