import express from "express";
import productsController from "../controller/productsController";

let router = express.Router();

const initProductsRoute = (app) => {
    router.get("/", productsController.getProductspage);
    return app.use("/products", router);
};

export default initProductsRoute;
