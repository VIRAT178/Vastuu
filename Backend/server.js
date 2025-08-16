import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "../Backend/configs/MongoDB.js";
import { clerkWebhooks, stripeWebhooks } from "./Controllers/webhooks.js";
import educatorRouter from "./Routes/Educator_Routes.js";
import { clerkMiddleware } from "@clerk/express";
import connectCloudinary from "./configs/cloundinary.js";
import courseRouter from "./Routes/Course_Routes.js";
import userRouter from "./Routes/User_Routes.js";

const app = express();

await connectDB();
await connectCloudinary();

app.use(cors());
app.use(clerkMiddleware())

app.get("/", (req, res) => {
  res.send("API working");
});

app.post('/clerk', 
  (req, res, next) => {
    let data = '';
    req.on('data', chunk => data += chunk);
    req.on('end', () => {
      req.rawBody = data;
      next();
    });
  },
  express.json(),
  clerkWebhooks
);
app.use("/api/educator", express.json(), educatorRouter);
app.use('/api/course', express.json(), courseRouter)
app.use('/api/user', express.json(), userRouter)
app.post('/stripe', express.raw({type: 'application/json'}), stripeWebhooks)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
