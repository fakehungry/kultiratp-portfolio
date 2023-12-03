import mongoose, { Schema } from "mongoose";

const experienceSchema = new Schema({
  title: String,
  position: String,
  startDate: Date,
  endDate: Date || String,
  responsibilities: [String],
  projects: [String],
  certificates: [String],
});

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", experienceSchema);

export default Experience;
