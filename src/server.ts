import { PrismaClient } from "@prisma/client";
import { Server as HTTPServer } from "http";
import app from "./app";

const port = 5000;

const prisma = new PrismaClient();

async function main() {
  const httpServer: HTTPServer = app.listen(port, () => {
    console.log("🚀 UUING Courier Service is running on port", port);
  });

  // const user = await prisma.user.createMany({
  //   data: [
  //     { userName: "john_doe", email: "john@example.com"},
  //     { userName: "jane_smith", email: "jane@example.com"},
  //     { userName: "admin_guy", email: "admin@example.com"},
  //     { userName: "emma_dev", email: "emma@devmail.com"},
  //     { userName: "liam_codes", email: "liam@codes.com"},
  //     { userName: "noah_admin", email: "noah@admin.com"},
  //     { userName: "olivia_pro", email: "olivia@pro.com"},
  //     { userName: "ava_user", email: "ava@user.com"},
  //     { userName: "sophia_data", email: "sophia@data.com"},
  //     { userName: "isabella_test", email: "isa@test.com"},
  //     { userName: "mason_dev", email: "mason@devmail.com"},
  //     { userName: "logan_ui", email: "logan@ui.com"},
  //     { userName: "lucas_admin", email: "lucas@adminmail.com"},
  //     { userName: "elijah_code", email: "elijah@code.com"},
  //     { userName: "mia_cust", email: "mia@cust.com"},
  //     { userName: "harper_test", email: "harper@test.com"},
  //     { userName: "ben_dev", email: "ben@devmail.com"},
  //     { userName: "charlie_user", email: "charlie@user.com"},
  //     { userName: "grace_admin", email: "grace@adminmail.com"},
  //     { userName: "ella_ui", email: "ella@ui.com"},
  //   ],
  // });

  // const result = await prisma.post.create({
  //   data: {
  //     title: "This is title",
  //     content: "This is post Content",
  //     authorName: "I am the author",
  //   },
  // });

  // const createMany = await prisma.post.createMany({
  //   data: [
  //     {
  //       title: "title 1",
  //       content: "This is post Content",
  //       authorName: "I am the author",
  //     },
  //     {
  //       title: "title 2",
  //       content: "This is post Content",
  //       authorName: "I am the author",
  //     },
  //   ],
  // });

  const findSingleUser = await prisma.user.findFirst({
    where: {
      email: "ella@ui.com",
    },
    select: {
      id: true,
      role: true,
      userName: true,
    },
  });

  // const getAllFromDb = await prisma.post.findMany();

  // const findSinglePost = await prisma.post.findFirstOrThrow({
  //   where: {
  //     // authorName: "I am the author",
  //   },
  // });

  // const deletFirst = await prisma.post.delete({
  //   where: {
  //     id: 42
  //   }
  // })

  // const deleteMany = await prisma.post.deleteMany({
  //   where: [
  //     id:
  //   ]
  // })

  // const update = await prisma.post.update({
  //   where: {
  //     id: 54
  //   },
  //   data: {
  //     published: true
  //   }
  // })

  // const updateMany = await prisma.post.updateMany({
  //   where: {
  //     title: 'title 2'
  //   },
  //   data: {
  //     published: true
  //   }
  // })

  // const deleteData = await prisma.post.delete({
  //   where: {
  //     id: 54
  //   }
  // })

  // const deleteMany = await prisma.post.deleteMany({})

  console.log(findSingleUser);
}

main();
