import express from 'express';
import getHomePage from '../controllers/HomeController'
import aboutPage from '../controllers/AboutController'
import newuser from '../controllers/UserController';
const router = express.Router();
const initWebRoute = (app) => {
  router.get('/', getHomePage)

  router.get('/about', aboutPage)
  router.get('/create-new-user',newuser)
  router.get('*',function (req, res){
    res.send('lỗi 404' , 'không tìm thấy trang',404)
  })
  return app.use('/',router)
}
export default initWebRoute
