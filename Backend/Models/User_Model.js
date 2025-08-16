import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    _id: {
      type: String,
      required: true,
    },
    clerkUserId: {
      type: String,
      unique: true,
      sparse: true,   
    },
    name: {
      type: String,
      required: true,
      default: "User",
    },
    email: {
      type: String,
      required: true,
      unique: true,  // assuming unique emails are enforced
    },
    imageUrl: {
      type: String,
      required: true,
      default: "",
    },
    enrolledCourses: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
export default User;
