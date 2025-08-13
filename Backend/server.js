import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from '../Backend/configs/MongoDB.js';
import { clerkWebhooks } from './Controllers/webhooks.js';

const app = express();

await connectDB();

app.use(cors());

app.get('/', (req, res) => {
  res.send("API working");
});


app.post(
  '/clerk',
  (req, res, next) => {
    let data = '';
    req.on('data', chunk => (data += chunk));
    req.on('end', () => {
      req.rawBody = data;
      next();
    });
  },
  express.json(),
  clerkWebhooks
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server is running on port ${PORT}`);
});
