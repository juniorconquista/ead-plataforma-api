




const sliderSchema = new Schema({
  name: { type: String, required: true, unique: true },
  path: { type: String, required: true },
  total: { type: Number, default: 0 }
});

    