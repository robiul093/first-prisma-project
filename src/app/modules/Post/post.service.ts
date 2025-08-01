import prisma from "../../../shared/prisma";

const createPostIntoDb = async (postData: any) => {
  const result = await prisma.post.create(postData);

  return result;
};

const getSinglePostFromDb = async (id: number) => {
  const result = await prisma.post.findFirst({
    where: { id },
  });

  return result;
};

const getAllPostFromDb = async () => {
  const result = await prisma.post.findMany();

  return result;
};
export const postService = {
  createPostIntoDb,
  getSinglePostFromDb,
  getAllPostFromDb,
};
