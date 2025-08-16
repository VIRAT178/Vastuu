import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  clerkUserId: { type: String, required: true, unique: true },
  name: { type: String, required: true, default: "User" },
  email: { type: String, required: true },
  imageUrl: { type: String, required: true, default: "" },
  enrolledCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
}, { timestamps: true });


const User = mongoose.model("User", userSchema);
export default User;
