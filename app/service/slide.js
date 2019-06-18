import * as repository from "../repository/slide";

export const upload = async files => {
  if (Object.keys(files).length == 0) {
    return Promise.reject("Nenhum arquivo para upload foi encontrado !");
  }
  const slide = files.slide;
  slide.mv(`app/uploads/${slide.md5}.pdf`, err => {
    if (err) return Promise.reject(err);
    repository.upload(`app/uploads/${slide.md5}.pdf`);
    return Promise.resolve();
  });
};

export const files = () => Promise.resolve();
export const list = async () => await repository.list();
