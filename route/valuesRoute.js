import express  from "express"
import { createValues } from "../controller/valuesController.js";
const valuesRoutes = express.Router();

valuesRoutes.post('/create-values',createValues);


export default valuesRoutes;