import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";

const options = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Express Service with Swagger!",
      version: "1.0.0",
      description: "A REST API using swagger and express.",
    },
    servers: [
      {
        url: "http://localhost:1234",
      },
    ],
  },
  apis: ["./controller/*.ts"],
};

export default options;
