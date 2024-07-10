import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";

export const appRoutes = (app: FastifyInstance) => {
  app.post("/users", register);
};
