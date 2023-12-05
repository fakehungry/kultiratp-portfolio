import mongoose, { Schema } from "mongoose";

const designSchema = new Schema({
  title: String,
  description: String,
  icon: String,
});

const Design =
  mongoose.models.design_skills ||
  mongoose.model("design_skills", designSchema);

export default Design;
