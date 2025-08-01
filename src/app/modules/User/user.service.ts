import prisma from "../../../shared/prisma";

const getAllUsersFromDb = async () => {
  const result = await prisma.user.findMany();

  return result;
};

const createUserIntoDb = async (userData: any) => {
  const result = prisma.user.create(userData);

  return result;
};

const getSingleUserFromDb = async (id: number) => {
  const result = prisma.user.findFirst({
    where: {
      id,
    },
  });

  return result;
};

const updateUserIntoDb = async (id: number, userData: any) => {
  const result = await prisma.user.update({
    where: {
      id,
    },
    data: userData,
  });

  return result;
};

export const userService = {
  createUserIntoDb,
  getAllUsersFromDb,
  getSingleUserFromDb,
  updateUserIntoDb
};
