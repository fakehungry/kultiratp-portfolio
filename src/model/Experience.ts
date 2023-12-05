import mongoose, { Schema } from "mongoose";

const experienceSchema = new Schema({
  job_title: String,
  position: String,
  start_date: Date,
  end_date: Date || String,
  responsibility: [String],
  projects: [String],
  certification: [String],
});

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default Experience;
