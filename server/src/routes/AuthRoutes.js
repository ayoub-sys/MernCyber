const { login, register } =require("../controllers/AuthControllers");
const {getDnsName} = require("../controllers/ScanControllers");
const { checkUser } = require("../middlewares/AuthMiddleware");

const router=require('express').Router();

router.post('/',checkUser);
router.post('/register',register);
router.post('/login',login);
router.get('/scan/:IP',getDnsName);


module.exports=router;