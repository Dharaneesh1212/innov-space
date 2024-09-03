import {
  create,
  update,
  deleteEmployee,
  all,
} from "../controller/managementController.js";
import express from "express";

const router = express.Router();

// POST: http://localhost:8000/api/employee
router.post("/", create);

// PUT: http://localhost:8000/api/employee/
router.put("/:id", update);

// DELETE: http://localhost:8000/api/employee/
router.delete("/:id", deleteEmployee);

// GET: http://localhost:8000/api/employee
router.get("/all", all);

export default router;
