import slideModel from "../schemas/slide";

export const upload = async path => {
  const slideAux = new slideModel({
    path
  });
  return slideAux.save();
};

export const list = async () => await slideModel.find().select("path");
