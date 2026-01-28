import "dotenv/config";
import { defineConfig } from "prisma/config";

export default defineConfig({
  schema: "prisma/user-schema.prisma",
  migrations: {
    path: "prisma/migrations-user",
  },
  datasource: {
    url: process.env["USER_DATABASE_URL"],
  },
});
