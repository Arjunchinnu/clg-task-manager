import validator from "../middleware/validator.js";
import express from "express";

import {
  createUserSchema,
  updateUserSchema,
} from "../validators/UserValidator.js";

import {
  createUser,
  updateUser,
  getAllUsers,
  deleteUser,
} from "../controllers/userControllers.js";

import { requireAuth } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";

const router = express.Router();
// Create User (admin + user allowed)
router.post(
  "/",
  requireAuth,
  authorizeRoles("admin", "user"),
  validator(createUserSchema),
  createUser,
);

// Get All Users (admin only)
router.get("/", requireAuth, authorizeRoles("admin"), getAllUsers);

// Update User (admin only)
router.put(
  "/:id",
  requireAuth,
  authorizeRoles("admin"),
  validator(updateUserSchema),
  updateUser,
);

// Delete User (admin only)
router.delete("/:id", requireAuth, authorizeRoles("admin"), deleteUser);

export default router;
