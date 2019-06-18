import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const Schema = mongoose.Schema;
const sliderSchema = new Schema({
  path: { type: String, required: true }
});

sliderSchema.plugin(timestamps);
const slide = mongoose.model("slide", sliderSchema, "slide");

export default slide;
