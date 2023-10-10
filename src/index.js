import dotenv from "dotenv";
import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/webRouter";
import path from "path";
const app = express();
dotenv.config();
const port = process.env.PORT;
configViewEngine(app);
// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/static", express.static(path.join(__dirname, "public")));
initWebRoute(app);
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
