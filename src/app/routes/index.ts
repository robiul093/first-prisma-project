import express from "express";
import { UserDataRoutes } from "../modules/User/user.route";
import { PostRoutes } from "../modules/Post/post.route";
// import { profileRoutes } from "../modules/Profile/profile.route";


const router = express.Router();

const moduleRoutes = [
  // {
  //   path: "/auth",
  //   route: AuthRoutes,
  // },
  {
    path: "/user",
    route: UserDataRoutes,
  },
  {
    path: "/post",
    route: PostRoutes
  },
  // {
  //   path: "/profile",
  //   route: profileRoutes
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
