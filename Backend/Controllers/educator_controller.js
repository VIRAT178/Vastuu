import { clerkClient } from "@clerk/express";
import Course from "../Models/Course_Model.js";
import { v2 as cloudinary } from "cloudinary";
import { Purchase } from "../Models/purchase.js";
import User from "../Models/User_Model.js";

export const updateRoleEducator = async (req, res) => {
  try {
    const authData = req.auth();
    console.log("authData =>", authData);

    const userId = authData?.userId;
    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID missing, check your token" });
    }
    await clerkClient.users.updateUserMetadata(userId, {
      publicMetadata: {
        role: "educator",
      },
    });
    res.json({ success: true, message: "You can publish a course now" });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

// Add new course
export const addCourse = async (req, res) => {
  try {
    const { courseData } = req.body;
    const imageFile = req.file;
    const authData = req.auth();
    const userId = authData?.userId;

    if (!userId) {
      return res
        .status(400)
        .json({ success: false, message: "User ID missing, check your token" });
    }

    if (!imageFile) {
      return res
        .status(400)
        .json({ success: false, message: "Thumbnail not attached" });
    }

    let parsedCourseData;
    try {
      parsedCourseData = JSON.parse(courseData);
    } catch (e) {
      return res
        .status(400)
        .json({ success: false, message: "Invalid JSON in courseData" });
    }

    parsedCourseData.educator = userId;

    const newCourseData = await Course.create(parsedCourseData);

    const imageUpload = await cloudinary.uploader.upload(imageFile.path);
    newCourseData.courseThumbnail = imageUpload.secure_url;
    await newCourseData.save();

    res.json({
      success: true,
      message: "Course added successfully",
      data: newCourseData,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get courses
export const getEducatorCourses = async (req, res) => {
  try {
    const { userId: educatorId } = req.auth;

    if (!educatorId) {
      return res.status(401).json({ success: false, message: "Unauthorized" });
    }

    const courses = await Course.find({ educator: educatorId });
    console.log(courses);

    res.json({ success: true, courses });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// dashbord data
export const educatorDashboardData = async (req, res) => {
  try {
    const { userId: educatorId } = req.auth;
    const courses = await Course.find({ educator: educatorId });
    const totalCourses = courses.length;

    const courseIds = courses.map(course => course._id)
    const purchases = await Purchase.find({
      courseId: {$in : courseIds},
      status: 'completed'
    });
    const totalEarnings = purchases.reduce((sum, purchase)=> sum+purchase.amount, 0)

    const enrolledStudentsData = [];
    for(const course of courses){
      const students = await User.find({
        _id: {$in : course.enrolledStudents}
      },'name imageUrl')
      students.forEach(element=>{
        enrolledStudentsData.push({
          courseTitle: course.courseTitle
        })
      })
    }
    res.json({success: true, dashboardData: {
      totalEarnings, enrolledStudentsData, totalCourses
    }})
  } catch (error) {
    res.json({success: false, message: error.message})
  }
};

export const getEnrolledStudents = async (req,res) => {
  try {
    const { userId: educatorId } = req.auth;
    const courses = await Course.find({ educator: educatorId });
    const courseIds = courses.map(course => course._id)

    const purchases = await Purchase.find({
      courseId: {$in: courseIds},
      status: 'completed'
    }).populate('userId', 'name imageUrl').populate('courseId', 'courseTitle')

    const enrolledStudents = purchases.map(purchase=>({
      student: purchase.userId,
      courseTitle: purchase.courseId.courseTitle,
      purchaseDate: purchase.createdAt
    }))

    res.json({success: true, enrolledStudents})
  } catch (error) {
    res.json({success: false , message: error.message})
  }
}