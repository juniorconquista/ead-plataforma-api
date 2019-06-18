import * as services from "../service/slide";

export const upload = (req, res) =>
  services
    .upload(req.files)
    .then(response => res.json(response))
    .catch(err => res.status(400).json({ message: err.message }));

export const files = (req, res) =>
  services
    .files(req.query.path)
    .then(response => res.download(req.query.path))
    .catch(err => res.status(400).json({ message: err.message }));

export const list = (_, res) =>
  services
    .list()
    .then(response => res.json(response[0]))
    .catch(err => res.status(400).json({ message: err.message }));
