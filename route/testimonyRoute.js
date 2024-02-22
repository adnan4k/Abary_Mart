import express  from "express"
import { allTestimony, createTestimony, deleteTestimony, presentTestimony, update, updateTestimony } from "../controller/TestimonyController.js";

const TestimonyRoutes = express.Router();

TestimonyRoutes.post('/create-testimony',createTestimony);
TestimonyRoutes.post('/update-testimony/:id',updateTestimony);
TestimonyRoutes.get('/view-testimony',allTestimony);
TestimonyRoutes.get('/present-testimony/:id',update);
TestimonyRoutes.get('/present-testimony',update);
TestimonyRoutes.get('/edit/:id',update);
TestimonyRoutes.delete('/delete/:id',deleteTestimony);



export default TestimonyRoutes;