import * as repository from "../repository/chat";

export const list = async () => await repository.list();

export const sendMessage = async user => {
  try {
    const response = await repository.sendMessage(user);
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const statusMessage = async (_id, status) =>
  repository.statusMessage(_id, status);

