import * as repository from "../repository/configuration";

export const list = async () => await repository.list();
export const create = async (_id, status) => repository.create(_id, status);
