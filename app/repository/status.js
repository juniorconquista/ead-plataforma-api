import statusModel from "../schemas/status";

export const listStatus = async () =>
  await statusModel.find().select(["uuid", "name", "isAdmin", "date"]);

export const setStatus = async (uuid, date, name, isAdmin) => {
  const statusAux = new statusModel({
    uuid,
    date,
    name,
    isAdmin
  });
  return statusAux.save();
};

export const updateStatus = async (_id, date) =>
  await statusModel.findOneAndUpdate(
    { _id },
    {
      $set: {
        date
      }
    },
    { new: true }
  );

export const getStatus = async uuid => await statusModel.find({ uuid }, "_id");

export const deleteStatus = async uuid => await statusModel.deleteOne({ uuid });
