import express from "express";
import {
  addCourse,
  educatorDashboardData,
  getEducatorCourses,
  getEnrolledStudents,
  updateRoleEducator,
} from "../Controllers/educator_controller.js";
import { requireAuth } from "@clerk/express";
import upload from "../configs/multer.js";
import { protectEducator } from "../Middlewares/authMiddleware.js";

const educatorRouter = express.Router();

educatorRouter.post("/update-role", requireAuth(), updateRoleEducator);

educatorRouter.post(
  "/add-course",
  requireAuth(),
  protectEducator,
  upload.single("image"),
  addCourse
);
educatorRouter.get(
  "/courses",
  requireAuth(),
  protectEducator,
  getEducatorCourses
);
educatorRouter.get(
  "/dashboard",
  requireAuth(),
  protectEducator,
  educatorDashboardData
);
educatorRouter.get(
  "/enrolled-students",
  requireAuth(),
  protectEducator,
  getEnrolledStudents
);
export default educatorRouter;
