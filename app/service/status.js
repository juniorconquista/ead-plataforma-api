import * as repository from "../repository/status";

export const listStatus = async () => await repository.listStatus();

export const setStatus = async ({ uuid, date, name, isAdmin }) => {
  try {
    const getSatus = await repository.getStatus(uuid);
    if (getSatus && getSatus[0] && getSatus[0]._id) {
      await repository.updateStatus(getSatus[0]._id, date);
    } else {
      await repository.setStatus(uuid, date, name, isAdmin);
    }
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};

export const deleteStatus = async uuid => {
  try {
    await repository.deleteStatus(uuid);
    return Promise.resolve();
  } catch (err) {
    return Promise.reject(err);
  }
};
