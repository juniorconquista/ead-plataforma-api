import chatModel from "../schemas/chat";

export const list = async () =>
  await chatModel
    .find()
    .select(["createdAt", "sender", "text", "idSender", "status"]);

export const sendMessage = message => {
  const chatAux = new chatModel({
    sender: {
      name: message.nameSender,
      _id: message.idSender
    },
    text: message.text
  });
  return chatAux.save();
};

export const statusMessage = async (_id, status) =>
  await chatModel.findOneAndUpdate(
    { _id },
    {
      $set: {
        status
      }
    },
    { new: true }
  );

export const rejectedMessage = async _id =>
  await chatModel.findOneAndUpdate(
    { _id },
    {
      $set: {
        rejected: true
      }
    },
    { new: true }
  );
