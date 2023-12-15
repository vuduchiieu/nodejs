import express from "express";
import APIProductsController from "../controller/APIProductsController";
import cors from "cors";

let router = express.Router();

const initAPIProductsRoute = (app) => {
    app.use(cors());
    router.get("/products", APIProductsController.getAllproducts);
    return app.use("/api/v2/", router);
};

export default initAPIProductsRoute;
