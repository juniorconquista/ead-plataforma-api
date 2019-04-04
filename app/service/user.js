import * as repository from "../repository/user";

export const login = async user => {
  const response = await repository.login(user);
  if (!response) {
    return Promise.reject();
  } else {
    return new Promise((resolve, reject) => {
      response.validatePassword(user.password, (err, isMatch) => {
        if (isMatch) {
          resolve(response);
        } else {
          reject(err);
        }
      });
    });
  }
};

export const create = async user => {
  try {
    const response = await repository.create(user);
    return Promise.resolve(response);
  } catch (err) {
    return Promise.reject(err);
  }
};
