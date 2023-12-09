import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import initAPIRoute from "./route/api";
require("dotenv").config();

const app = express();
const port = 3002 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
