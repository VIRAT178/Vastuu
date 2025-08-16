import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, auto: true }, 
  clerkUserId: { type: String, required: true, unique: true }, 
  name: String,
  email: { type: String, required: true },
  imageUrl: String,
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
export default User;
