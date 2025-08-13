import { Webhook } from "svix";
import User from "../Models/User_Model.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    // Verify the signature against the raw body
    whook.verify(req.rawBody, {
      "svix-id": req.headers["svix-id"] || req.headers["Svix-Id"],
      "svix-timestamp": req.headers["svix-timestamp"] || req.headers["Svix-Timestamp"],
      "svix-signature": req.headers["svix-signature"] || req.headers["Svix-Signature"],
    });

    // Now parse the string rawBody safely to get the JSON object
    const body = JSON.parse(req.rawBody);

    // Destructure data and type from parsed body
    const { data, type } = body;

    switch (type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url,
        };
        const user = await User.create(userData);
        console.log("User created:", user);
        return res.status(200).json({ success: true });
      }
      case "user.updated": {
        const updatedData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ""} ${data.last_name || ""}`.trim(),
          imageUrl: data.image_url,
        };
        const user = await User.findByIdAndUpdate(data.id, updatedData, { new: true, runValidators: true });
        console.log("User updated:", user);
        return res.status(200).json({ success: true });
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        console.log("User deleted:", data.id);
        return res.status(200).json({ success: true });
      }
      default:
        return res.status(200).json({ received: true });
    }
  } catch (error) {
    console.error("Webhook verification or processing failed:", error);
    return res.status(400).json({ success: false, message: error.message });
  }
};
