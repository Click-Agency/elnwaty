import { Request, Response } from "express";
import { sendContactService } from "../services/contact.service";
import Contact from "../types/Contact";
import contactSchema from "../schemas/contact.schema";

const sendContactController = async (req: Request, res: Response) => {
  try {
    const contactData = req.body as Contact;

    const safeContactData = contactSchema.safeParse(contactData);

    if (!safeContactData.success) {
      res.status(403).json({
        error: safeContactData.error?.format(),
      });
      return;
    }

    await sendContactService(res, contactData);

    res.status(200).json({ sucess: "Email sent successfully" }).end();
  } catch (error) {
    res.status(400).json({ error: "something went wrong" }).end();
  }
};

export { sendContactController };
