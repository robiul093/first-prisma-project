import express from "express";
import { UserController } from "./user.controller";
// import { USER_ROLE } from "@prisma/client";

// import RoleValidation from "../../middlewares/RoleValidation";
const router = express.Router();

router.get(
  "/all-users",
  // RoleValidation(USER_ROLE.admin),
  UserController.getAllUsers
);

router.get("/:id", UserController.getSingleUser);
router.put("/:id", UserController.updateUser);

// router.get(
//   "/my-profile-info",
//   // RoleValidation(USER_ROLE.admin,  USER_ROLE.marchant),
//   UserDataController.myProfileInfo
// );
// router.patch(
//   "/change-role/:id",
//   // RoleValidation(USER_ROLE.admin),
//   UserDataController.changeRole
// );

// router.patch(
//   "/change-status/:id",
//   // RoleValidation(USER_ROLE.admin),
//   UserDataController.changeUserStatus
// );
// router.delete(
//   "/delete-user/:id",
//   // RoleValidation(USER_ROLE.admin),
//   UserDataController.deleteUser
// );

export const UserDataRoutes = router;
