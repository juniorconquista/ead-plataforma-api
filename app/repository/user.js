import userModel from "../schemas/user";

export const login = user =>
  userModel.findOne({ email: user.email }).then(usr => usr);

export const create = user => {
  const userAux = new userModel({
    name: user.name,
    email: user.email,
    password: user.password
  });
  return userAux.save();
};
