import mongoose from "mongoose";
export const connectDB = () => {
    mongoose
      .connect("mongodb://127.0.0.1:27017/codex2",{ useNewUrlParser: true, useUnifiedTopology: true })
      .then((c) => console.log(`Database Connected with `))
      .catch((e) => console.log(e));
  };