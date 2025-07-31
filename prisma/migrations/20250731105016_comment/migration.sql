-- CreateTable
CREATE TABLE "Comment" (
    "commentId" SERIAL NOT NULL,
    "comment" TEXT NOT NULL,
    "like" TEXT NOT NULL,
    "reply" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("commentId")
);
