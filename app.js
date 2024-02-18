
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
import session from 'express-session';
import mongoose from 'mongoose';
import productRoutes from './route/productRoute.js';
import bannerRoutes from './route/bannerRoute.js';
import valuesRoutes from './route/valuesRoute.js';
import websettingRoutes from './route/websiteSettingRoute.js';
import userRoutes from './route/userRoute.js';
import path from 'path'
import multer from 'multer';
import methodOverride from "method-override"

const storage = multer.diskStorage({
  destination:(req,res,cb)=>{
       cb(null,'images')
  },
  filename:(req,file,cb)=>{
    // console.log(file,'this is file')
    cb(null,path.extname(file.originalname))
    console.log(path.extname(file.originalname),'file name')
  }
})

const upload = multer({storage:storage})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const PORT = 5000;
app.use(methodOverride('_method'));
app.use('/images',express.static('images'))

app.use(session({
  secret: 'user',
  resave: false,
  saveUninitialized: true
}));
// app.use(bodyParser.json());


app.use('/product',upload.single('image'),productRoutes)
app.use('/banner',upload.single('image'),bannerRoutes)
app.use('/values',upload.single('image'),valuesRoutes)
app.use('/web-setting',upload.single('image'),websettingRoutes)
app.use('/user',upload.single('image'),userRoutes)
app.use(express.static(__dirname + '/public'));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(express.static('public')); 



app.set('view engine', 'ejs');

app.get('/',(req,res)=>{
  res.render('layout',{title:"Home",myRoute:"/product/view-product"})
})

mongoose.connect("mongodb://127.0.0.1:27017/abay-mart")
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listening on port", PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
