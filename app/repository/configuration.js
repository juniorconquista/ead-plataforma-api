import configurationModel from "../schemas/configuration";

export const list = async () =>
  await configurationModel
    .find()
    .select([
      "url",
      "date",
      "title",
      "description",
      "moderateChat",
      "inscriptionsClosed"
    ]);

export const create = async (_id, config) =>
  await configurationModel.findOneAndUpdate(
    { _id },
    {
      $set: {
        ...config
      }
    },
    { new: true }
  );
