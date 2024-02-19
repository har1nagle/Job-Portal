import express from "express";
import { deleteJob, getAllJobs, getmyJobs, postJob, updateJob} from "../controllers/jobController.js";
import { isAuthorized } from "../middlewares/auth.js";

const router = express.Router();

router.get("/getall", getAllJobs);
router.post("/post", isAuthorized, postJob);
router.get("/getmyjobs", isAuthorized, getmyJobs);
router.get("/update/:id", isAuthorized, updateJob);
router.get("/delete/:id", isAuthorized, deleteJob);

export default router;
