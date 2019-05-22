import mongoose from "mongoose";
import timestamps from "mongoose-timestamp";

const Schema = mongoose.Schema;

const chatSchema = new Schema({
  sender: { type: Object },
  text: String,
  idSender: { type: String },
  status: { type: String, default: "waiting" }
});

chatSchema.plugin(timestamps);
const Chat = mongoose.model("chat", chatSchema, "chat");

export default Chat;
