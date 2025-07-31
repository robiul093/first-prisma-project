import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
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

  const getAllFromDb = await prisma.post.findMany();

  const findFast = await prisma.post.findFirstOrThrow({
    where: {
      authorName: "I am the author",
    },
  });

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
  
  console.log(getAllFromDb);
}

main();
 