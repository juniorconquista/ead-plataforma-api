import configurationModel from "../schemas/configuration";

export const list = async () =>
  await configurationModel
    .find()
    .select(["url", "date", "moderateChat", "inscriptionsClosed"]);
