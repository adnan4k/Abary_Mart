import express from "express"
import { allMessage, createMessage, deleteMessage } from "../controller/MessageController.js";

const messageRoute = express.Router();

messageRoute.post('/create-message',createMessage);
messageRoute.delete('/delete-message/:id',deleteMessage);
messageRoute.get('/view-message',allMessage)

export default messageRoute