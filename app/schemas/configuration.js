import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const Schema = mongoose.Schema;

const configurationSchema = new Schema({
  url: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  moderateChat: { type: Boolean, default: true },
  date: { type: Date },
  inscriptionsClosed: { type: Boolean, default: false }
});

configurationSchema.plugin(timestamps);
const Configuration = mongoose.model(
  "configuration",
  configurationSchema,
  "configuration"
);

export default Configuration;
