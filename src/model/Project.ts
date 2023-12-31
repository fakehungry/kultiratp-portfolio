import mongoose, { Schema } from "mongoose";

const projectSchema = new Schema({
  title: String,
  description: String,
  tags: [String],
  img: String,
  view: String,
  video: String,
});

const Project =
  mongoose.models.Project || mongoose.model("Project", projectSchema);

export default Project;
