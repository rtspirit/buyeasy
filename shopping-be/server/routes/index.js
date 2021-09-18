import items from "./items";
import users from "./users";

export default (app) => {
  app.use("/items", items);
  app.use("/users", users);
};
