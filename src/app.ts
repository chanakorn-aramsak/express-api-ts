import express from "express";
import { MonicController } from "./controller/MonicController";
import { OiberController } from "./controller/OiberController";
import { Monic } from "./service/monic";
import { Oiber } from "./service/oiber";
import * as swagger from "swagger-express-ts";
import { SwaggerDefinitionConstant } from "swagger-express-ts";

const app = express();
app.use(express.json());

app.use('/api-docs/swagger', express.static('swagger'));
app.use(swagger.express({
    definition: {
        info: {
            title: 'Backend Framework API',
            version: '1.0.0',
        },
    },
}));

const monicController = new MonicController(new Monic());
const oiberController = new OiberController(new Oiber());

app.get("/monic", (req, res) => monicController.handleGET(req, res));
app.post("/monic", (req, res) => monicController.handlePOST(req, res));

app.get("/oiber", (req, res) => oiberController.handleGET(req, res));
app.post("/oiber", (req, res) => oiberController.handlePOST(req, res));

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
