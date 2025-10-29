/*
  Warnings:

  - You are about to drop the `user_pasword_resets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."user_pasword_resets" DROP CONSTRAINT "user_pasword_resets_user_id_fkey";

-- DropTable
DROP TABLE "public"."user_pasword_resets";

-- CreateTable
CREATE TABLE "public"."user_password_resets" (
    "id" CHAR(36) NOT NULL,
    "user_id" TEXT NOT NULL,
    "token" TEXT NOT NULL,

    CONSTRAINT "user_password_resets_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."user_password_resets" ADD CONSTRAINT "user_password_resets_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
