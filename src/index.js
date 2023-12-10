import express from "express";
import configViewEngine from "./configs/viewEngine";
import initUserRoute from "./route/users";
import initAPIRoute from "./route/api";
import initWebRoute from "./route/web";
import initProductsRoute from "./route/products";

require("dotenv").config();

const app = express();
const port = 3002 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initUserRoute(app);
initProductsRoute(app);
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
