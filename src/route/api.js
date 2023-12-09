import express from "express";
import APIController from "../controller/APIController";
import cors from "cors";

let router = express.Router();

const initAPIRoute = (app) => {
    app.use(cors());
    router.get("/users", APIController.getAllUsers);
    router.get("/user/:id", APIController.getUser);
    router.post("/create", APIController.createNewUser);
    router.put("/update", APIController.updateUser);
    router.delete("/delete/:id", APIController.deleteUser);
    return app.use("/api/v1/", router);
};

export default initAPIRoute;
