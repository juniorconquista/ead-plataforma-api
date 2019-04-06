import * as services from "../service/user";

export const login = (req, res) =>
  services
    .login(req.body)
    .then(response => res.json(response))
    .catch(() => res.status(400).json({ message: "Email/Senha inválido!" }));

export const create = (req, res) =>
  services
    .create(req.body)
    .then(response => res.json(response))
    .catch(err => res.status(400).json({ message: err.message }));
