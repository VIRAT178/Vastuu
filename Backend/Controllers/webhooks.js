import { Webhook } from "svix";
import User from '../Models/User_Model.js';

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    whook.verify(req.rawBody, {
      "svix-id": req.headers["svix-id"] || req.headers["Svix-Id"],
      "svix-timestamp": req.headers["svix-timestamp"] || req.headers["Svix-Timestamp"],
      "svix-signature": req.headers["svix-signature"] || req.headers["Svix-Signature"]
    });

    const { data, type } = req.body;

    console.log(`📩 Webhook Event: ${type}`);
    console.log("Incoming Clerk data:", data);

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
          imageUrl: data.image_url,
        };

        try {
          const user = await User.create(userData);
          console.log("✅ User created:", user);
        } catch (err) {
          if (err.code === 11000) {
            console.log("⚠️ User already exists, skipping create.");
          } else {
            throw err;
          }
        }
        return res.status(200).json({ success: true });
      }

      case "user.updated": {
        const updatedData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
          imageUrl: data.image_url,
        };

        const user = await User.findByIdAndUpdate(data.id, updatedData, {
          new: true,
          runValidators: true
        });
        console.log("🔄 User updated:", user);
        return res.status(200).json({ success: true });
      }

      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("🗑️ User deleted:", data.id);
        return res.status(200).json({ success: true });
      }

      default:
        console.log(`ℹ️ Unhandled webhook event type: ${type}`);
        return res.status(200).json({ received: true });
    }
  } catch (error) {
    console.error("❌ Webhook verification or processing failed:", error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
