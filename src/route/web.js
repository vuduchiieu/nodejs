import express from "express";
import homeController from "../controller/homeController";

let router = express.Router();

const initWebRoute = (app) => {
    router.get("/", homeController.getHomepage);
    router.get("/detail/user/:id", homeController.getDetailpage);
    router.post("/create", homeController.createNewUser);
    router.post("/delete", homeController.deleteUser);
    router.post("/edit/:id", homeController.getEditPage);
    return app.use("/", router);
};

export default initWebRoute;
