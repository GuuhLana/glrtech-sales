import express from "express";
import { createInitialData } from "./src/config/db/initialData.js";
import userRoutes from "./src/modules/user/routes/UserRoutes.js"
import tracing from "./src/config/tracing.js"

const app = express();
const env = process.env;
const PORT = env.PORT || 8080;
const CONTAINER_ENV = "container";

app.get("/", (req, res) => {
  return res.status(200).json(getOkResponse());
});

app.get("/api/status", (req, res) => {
  return res.status(200).json(getOkResponse());
});

function getOkResponse() {
  return {
    service: "Auth-API",
    status: "up",
    httpStatus: 200,
  }
}

app.use(express.json());

startApplication();

function startApplication() {
  if (env.NODE_ENV !== CONTAINER_ENV) {
    createInitialData();
  }
}

app.get("/api/initial-data", (req, res) => {
  createInitialData();
  return res.json({ message: "Data created." });
});

app.use(tracing);
app.use(userRoutes);

app.listen(PORT, () => {
  console.info(`Server started successfully at port ${PORT}`);
});