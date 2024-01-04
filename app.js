
import express from 'express';
import mongoose from 'mongoose';


const app = express();
const PORT = 5000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

mongoose.connect("mongodb://127.0.0.1:27017/abay-mart")
  .then(() => {
    app.listen(PORT, () => {
      console.log("App is listening on port", PORT);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
