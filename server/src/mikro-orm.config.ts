import { __prod__ } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import { Post } from "./entities/Post";
import { User } from "./entities/User";
import path from "path";

export default {
  migrations: {
    path: path.join(__dirname, "./migrations"), // path to the folder with migrations
    pattern: /^[\w-]+\d+\.[tj]s$/, // regex pattern for the migration files
  },
  entities: [Post, User],
  dbName: "lireddit",
  user: "postgres",
  password: "mysecretpassword",
  type: "postgresql",
  debug: !__prod__,
} as Parameters<typeof MikroORM.init>[0];
