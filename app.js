
import express from 'express';
import mongoose from 'mongoose';
import productRoutes from './route/productRoute.js';
import bannerRoutes from './route/bannerRoute.js';
import valuesRoutes from './route/valuesRoute.js';


const app = express();
app.use(express.json());
const PORT = 5000;
// app.use(bodyParser.json());


app.use('/product',productRoutes)
app.use('/banner',bannerRoutes)
app.use('/values',valuesRoutes)

mongoose.connect("mongodb://127.0.0.1:27017/abay-mart")
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listening on port", PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
