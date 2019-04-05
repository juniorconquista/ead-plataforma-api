import chatModel from "../schemas/chat";

export const list = async () =>
  await chatModel
    .find()
    .select(["createdAt", "sender", "text", "idSender", "approved"]);

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
