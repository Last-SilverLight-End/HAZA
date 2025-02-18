import express, { Request, Response, NextFunction } from "express";
import boardRouter from "../controller/BoardController";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
import swaggerOptions from "./swagger"; // .js 확장자 사용
import { exec, spawnSync } from "child_process";

const specs = swaggerJsDoc(swaggerOptions);

const app = express();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "${SWAGGER_TITLE}",
      version: "1.0.0",
    },
  },
  apis: ["api들의 경로"],
};

app.use("/api/board", boardRouter);

app.use(
  "/swagger",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.listen(1234, () => {
  console.log(`
    ################################################
    🛡️  Server listening on port: 1234 🛡️
    ################################################
  `);
  exec("explorer http://localhost:1234/swagger");
});
