import { createAdmin, createAlumni, createStudent, getAllUsers } from "../controllers/usercontroller.js";
import { createCompany, getCompanies} from "../controllers/companyController.js";
import { createReview, getAllReviews } from "../controllers/reviewController.js";
import { likeReviews } from "../controllers/likeController.js";
import express from "express";
import { isAdmin } from "../middleware/Middleware.js";

const router=express.Router();

//users
router.post("/admin/create",createAdmin)
router.post("/alumni/create",createAlumni)
router.post("/student/create",createStudent)

router.get("/user/get",getAllUsers)

//company
router.post("/company/create", isAdmin,createCompany)

router.get("/company/get",getCompanies)

//review
router.post("/review/create",createReview)

router.get("/review/get",getAllReviews)

//likes
router.post("/like/add",likeReviews)

export default router;