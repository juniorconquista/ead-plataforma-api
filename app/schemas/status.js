import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const Schema = mongoose.Schema;

const statusSchema = new Schema({
  uuid: { type: "String", type: String, required: true, unique: true },
  date: { type: Date },
  name: String,
  isAdmin: { type: Boolean }
});

statusSchema.plugin(timestamps);
const Status = mongoose.model("Status", statusSchema, "status");

export default Status;
