import express  from "express"
import { createValues, updateValues } from "../controller/valuesController.js";
const valuesRoutes = express.Router();

valuesRoutes.post('/create-values',createValues);
valuesRoutes.put('/update-values/:id',updateValues);


export default valuesRoutes;