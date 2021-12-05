import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import microConfig from "./mikro-orm.config";
// import { Post } from "./entities/Post";

const main = async () => {
  const orm = await MikroORM.init(microConfig);
  await orm.getMigrator().up();
  // const post = orm.em.create(Post, { title: "my third post" });
  // await orm.em.persistAndFlush(post);
};

main();

console.log("hello world!!!");
