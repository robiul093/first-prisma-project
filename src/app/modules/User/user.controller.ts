import status from "http-status";
import catchAsync from "../../../shared/catchAsync";
import sendResponse from "../../../shared/sendResponse";
// import { UserDataServices } from "./user.service";
// import { Request } from "express";
import { userService } from "./user.service";
import { Request, Response } from "express";

const getAllUsers = catchAsync(async (req, res) => {
  const result = await userService.getAllUsersFromDb();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "All users fetched successfully.",
    data: result,
  });
});

const getSingleUser = catchAsync(async (req, res) => {
  const id = Number(req.params.id);
  const result = await userService.getSingleUserFromDb(id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User fetched successfully.",
    data: result,
  });
});

const updateUser = catchAsync(async (req: Request, res: Response) => {
  const id = Number(req.params.id);
  const result = await userService.updateUserIntoDb(id, req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "User info updated successfully",
    data: result,
  });
});

const myProfileInfo = catchAsync(async (req: Request & { user?: any }, res) => {
  // const result = await UserDataServices.myProfileInfo(req.user.id);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "My Profile Info Fetched Successfuly.",
    data: "result",
  });
});
const changeRole = catchAsync(async (req, res) => {
  const { id } = req.params;

  // const result = await UserDataServices.changeRole(id, req.body);

  //   console.log(req.user);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Role Changed Successfuly.",
    data: "result",
  });
});

const changeUserStatus = catchAsync(async (req, res) => {
  const { id } = req.params;

  // const result = await UserDataServices.changeUserStatus(id, req.body);

  //   console.log(req.user);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " Status Changed Successfuly.",
    data: "result",
  });
});

const deleteUser = catchAsync(async (req, res) => {
  const { id } = req.params;

  // const result = await UserDataServices.deleteUser(id);

  //   console.log(req.user);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: " User Deleted Successfuly.",
    data: "result",
  });
});

export const UserController = {
  getAllUsers,
  getSingleUser,
  updateUser,
  changeRole,
  changeUserStatus,
  deleteUser,
  myProfileInfo,
};
