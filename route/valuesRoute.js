import express  from "express"
import { allValues, createValues, presentValues, updateValues } from "../controller/valuesController.js";
const valuesRoutes = express.Router();

valuesRoutes.post('/create-values',createValues);
valuesRoutes.put('/update-values/:id',updateValues);
valuesRoutes.get('/view-values/',allValues);
valuesRoutes.get('/present-values/',presentValues);


export default valuesRoutes;