import { Router } from "express";
import { sendContactController } from "../controllers/contact.controller";

const contactRouter: Router = Router();

contactRouter.post("/", sendContactController);

export default contactRouter;
