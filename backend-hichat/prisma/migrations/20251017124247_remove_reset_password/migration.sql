/*
  Warnings:

  - You are about to drop the `user_password_resets` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "public"."user_password_resets" DROP CONSTRAINT "user_password_resets_user_id_fkey";

-- DropTable
DROP TABLE "public"."user_password_resets";
