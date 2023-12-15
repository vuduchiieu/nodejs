import express from "express";
import configViewEngine from "./configs/viewEngine";
import initUserRoute from "./route/users";
import initAPIRoute from "./route/api";
import initWebRoute from "./route/web";
import initAPIProductsRoute from "./route/APIProducts";

require("dotenv").config();

const app = express();
const port = 3002 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initUserRoute(app);
initAPIRoute(app);
initAPIProductsRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
