import * as repository from "../repository/chat";

export const sendMessage = async user => {
  try {
    const response = await repository.sendMessage(user);
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};

export const list = async () => await repository.list();
