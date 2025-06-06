import express from "express"
import { handleNewsletterSubscription } from "../controllers/SubscriberControllers.js";

const router = express.Router();
// @route Post api/subscribe
// @description Handle newslater subscription
// @access Public

router.post("/subscribe",handleNewsletterSubscription)

export default router
