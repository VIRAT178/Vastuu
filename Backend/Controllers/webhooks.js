import { Webhook } from "svix";
import User from "../Models/User_Model.js";
import Stripe from "stripe";
import { Purchase } from "../Models/purchase.js";
import Course from "../Models/Course_Model.js";

export const clerkWebhooks = async (req, res) => {
  try {
    const whook = new Webhook(process.env.CLERK_WEBHOOK_SECRET);
    whook.verify(req.rawBody, {
      "svix-id": req.headers["svix-id"] || req.headers["Svix-Id"],
      "svix-timestamp": req.headers["svix-timestamp"] || req.headers["Svix-Timestamp"],
      "svix-signature": req.headers["svix-signature"] || req.headers["Svix-Signature"],
    });

    const body = JSON.parse(req.rawBody);
    const { data, type } = body;

    switch (type) {
     case "user.created": {
  
  const email =
    Array.isArray(data.email_addresses) &&
    data.email_addresses.length > 0 &&
    typeof data.email_addresses[0].email_address === "string"
      ? data.email_addresses.email_address
      : "";

  const name =
    [data.first_name, data.last_name].filter(Boolean).join(" ") ||
    email ||
    data.id;

  if (!email) {
    console.error("Webhook failed: email missing for user.id", data.id, data);
    return res.status(400).json({ success: false, message: "User email missing in webhook" });
  }

  
  let existingUser = await User.findOne({ email });

  if (existingUser) {
    
    if (!existingUser.clerkUserId) {
      existingUser.clerkUserId = data.id;
      await existingUser.save();
    }
    return res.status(200).json({ success: true, message: "User already exists with this email." });
  }

  
  let user = await User.findOne({ clerkUserId: data.id });

  if (user) {
    user.email = email;
    user.name = name;
    user.imageUrl = data.image_url || "";
    await user.save();
    console.log("User updated (already exists):", user);
    return res.status(200).json({ success: true });
  }

  
  user = new User({
    clerkUserId: data.id,
    name,
    email,
    imageUrl: data.image_url || "",
    enrolledCourses: [],
  });

  await user.save();
  console.log("User created:", user);
  return res.status(200).json({ success: true });
}

      case "user.updated": {
        let email = "";
        if (Array.isArray(data.email_addresses) && data.email_addresses.length > 0) {
          if (data.primary_email_address_id) {
            const primaryEmailObj = data.email_addresses.find(
              (e) => e.id === data.primary_email_address_id
            );
            email = primaryEmailObj ? primaryEmailObj.email_address : data.email_addresses[0].email_address;
          } else {
            email = data.email_addresses.email_address;
          }
        }
        const updatedData = {
          email,
          name: [data.first_name, data.last_name].filter(Boolean).join(" ") || email || data.id,
          imageUrl: data.image_url || "",
        };
        const user = await User.findByIdAndUpdate(data.id, updatedData, {
          new: true,
          runValidators: true,
        });
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


const stripeInstance = new Stripe(process.env.STRIPE_SECRET_KEY);
export const stripeWebhooks = async (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event;

  try {
    event = Stripe.webhooks.constructEvent(
      req.body,
      sig,
      process.env.STRIPE_WEBHOOK_KEY
    );
  } catch (err) {
    res.status(400).send(`Webhook Error: ${err.message}`);
  }
  switch (event.type) {
    case "payment_intent.succeeded": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });
      const { purchaseId } = session.data[0].metadata;

      const purchaseData = await Purchase.findById(purchaseId);
      const userData = await User.findById(purchaseData.userId);

      const courseData = await Course.findById(
        purchaseData.courseId.toString()
      );

      courseData.enrolledStudents.push(userData);
      await courseData.save();

      userData.enrolledCourses.push(courseData);
      await userData.save();

      purchaseData.status = "completed";
      await purchaseData.save();
      break;
    }
    case "payment_intent.payment_failed": {
      const paymentIntent = event.data.object;
      const paymentIntentId = paymentIntent.id;
      const session = await stripeInstance.checkout.sessions.list({
        payment_intent: paymentIntentId,
      });
      const { purchaseId } = session.data[0].metadata;

      const purchaseData = await Purchase.findById(purchaseId);
      purchaseData.status = "failed";
      await purchaseData.save();
      break;
    }
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
};
