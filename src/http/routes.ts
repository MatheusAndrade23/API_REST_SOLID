import { FastifyInstance } from "fastify";
import { register } from "./controllers/register";
import { authenticate } from "./controllers/authenticate";
import { profile } from "./controllers/profile";

export const appRoutes = (app: FastifyInstance) => {
  app.post("/users", register);

  app.post("/sessions", authenticate);

  // Authenticated routes

  app.get("/me", profile);
};
