import { Request, Response } from "express";
import { sendContactService } from "../services/contact.service";
import Contact from "../types/Contact";

const sendContactController = async (req: Request, res: Response) => {
  try {
    const data = req.body as Contact;

    await sendContactService(res, data);

    res.status(200).json({ sucess: "Email sent successfully" }).end();
  } catch (error) {
    res.status(400).json({ error: "something went wrong" }).end();
  }
};

export { sendContactController };
