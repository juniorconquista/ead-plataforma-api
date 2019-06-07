import mongoose from "mongoose";
import uuidv4 from "uuid/v4";
import bcrypt from "bcryptjs";
import timestamps from "mongoose-timestamp";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  uuid: { type: "String", required: true, unique: true },
  name: String,
  email: { type: "String", required: true, unique: true },
  password: { type: "String", required: true },
  isAdmin: { type: Boolean, default: false }
});

userSchema.pre("save", function(next) {
  if (this.isModified("password")) {
    ``;
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(this.password, salt, (err, hash) => {
        if (err) {
          return next(err);
        }
        this.password = hash;
        next();
      });
    });
  } else {
    next();
  } 
});

userSchema.methods.validatePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) {
      return cb(err);
    }
    return cb(null, isMatch);
  });
};

userSchema.plugin(timestamps);

export default mongoose.model("user", userSchema);
