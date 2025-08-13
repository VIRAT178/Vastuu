import { Webhook } from "svix";
import User from "../Models/User_Model.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);

    await whook.verify(req.rawBody, {
      "svix-id": req.headers["svix-id"],
      "svix-timestamp": req.headers["svix-timestamp"],
      "svix-signature": req.headers["svix-signature"],
    });

    const { data, type } = req.body;

    switch(type) {
      case "user.created": {
        const userData = {
          _id: data.id,
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
          imageUrl: data.image_url,
        };
        console.log("Creating user:", userData);
        const user = await User.create(userData);
        console.log("User created:", user);
        return res.json({});
      }
      case "user.updated": {
        const userData = {
          email: data.email_addresses[0].email_address,
          name: `${data.first_name || ''} ${data.last_name || ''}`.trim(),
          imageUrl: data.image_url,
        };
        await User.findByIdAndUpdate(data.id, userData);
        return res.json({});
      }
      case "user.deleted": {
        await User.findByIdAndDelete(data.id);
        return res.json({});
      }
      default: 
        return res.json({ received: true });
    }
  } catch (error) {
    console.error("Webhook verification error:", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
