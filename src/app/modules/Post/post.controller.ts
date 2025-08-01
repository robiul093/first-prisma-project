import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { postService } from "./post.service";
import sendResponse from "../../../shared/sendResponse";
import status from "http-status";

const getAllPost = catchAsync(async (req: Request, res: Response) => {
  const result = await postService.getAllPostFromDb();

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "My Profile Info Fetched Successfuly.",
    data: result,
  });
});

const createPost = catchAsync(async (req: Request, res: Response) => {
  const result = await postService.createPostIntoDb(req.body);

  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Post Created Successfully",
    data: result,
  });
});

export const postController = {
  getAllPost,
  createPost,
};
