import express from 'express'
import { getAllCourse, getCourseById } from '../Controllers/Course_Controller.js'

const courseRouter = express.Router()

courseRouter.get('/all', getAllCourse)
courseRouter.get('/:id', getCourseById)

export default courseRouter;
