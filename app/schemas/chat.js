import mongoose from "mongoose";
import uuidv4 from "uuid/v4";
import timestamps from "mongoose-timestamp";

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  sender: { type: Object },
  text: String,
  idSender: { type: String },
  approved: { type: Boolean, default: false }
});

chatSchema.plugin(timestamps);
const Chat = mongoose.model("chat", chatSchema, "chat");

export default Chat;
