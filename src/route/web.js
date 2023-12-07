import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", homeController.getHomepage);
    router.get("/detail/user/:id", homeController.getDetailpage);
    router.post("/create", homeController.createNewUser);
    return app.use("/", router);
};

export default initWebRoute;
