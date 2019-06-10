import configurationModel from "../schemas/configuration";

export const list = async () =>
  await configurationModel
    .find()
    .select(["url", "date", "title", "description", "moderateChat", "inscriptionsClosed"]);
