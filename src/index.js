import express from "express";
import configViewEngine from "./configs/viewEngine";
import initUserRoute from "./route/users";
import initAPIRoute from "./route/api";
import initWebRoute from "./route/web";
import initAPIProductsRoute from "./route/apiProducts";

require("dotenv").config();

const app = express();
const port = 3002 || process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

configViewEngine(app);
initWebRoute(app);
initUserRoute(app);
initAPIProductsRoute(app);
initAPIRoute(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
