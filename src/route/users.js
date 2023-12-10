import express from "express";
import usersController from "../controller/usersController";

let router = express.Router();

const initUserRoute = (app) => {
    router.get("/", usersController.getUserspage);
    router.get("/detail/user/:id", usersController.getDetailpage);
    router.post("/create", usersController.createNewUser);
    router.post("/delete", usersController.deleteUser);
    router.get("/edit/:id", usersController.getEditPage);
    router.post("/update", usersController.updateUser);
    return app.use("/users", router);
};

export default initUserRoute;
