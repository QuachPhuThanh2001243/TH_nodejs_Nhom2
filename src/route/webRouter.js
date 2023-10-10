import { createuser, newuser, listuser } from "../controllers/UserController";
import getHomePage from "../controllers/HomeController";
import aboutPage from "../controllers/AboutController";
const initWebRoute = (app) => {
  // router.get("/", getHomePage);

  // router.get("/about", aboutPage);
  app.get("/list-user", listuser);
  app.get("/create-new-user", newuser);
  app.post("/create-new-user", createuser);
  app.get("*", function (req, res) {
    res.send("lỗi 404", "không tìm thấy trang", 404);
  });
  // return app.use("/", router);
};
export default initWebRoute;
