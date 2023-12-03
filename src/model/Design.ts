import mongoose, { Schema } from "mongoose";

const designSchema = new Schema({
  title: String,
  description: String,
  img: String,
});

const Design = mongoose.models.Design || mongoose.model("Design", designSchema);

export default Design;
