import e, { Response } from "express";
import Excel from "../utils/Excel";
import Contact from "../types/Contact";
import Mailer from "../utils/Mailer";
import config from "../config";

const sendContactService = async (res: Response, data: Contact) => {
  try {
    const dataWithDate = { ...data, date: new Date().toLocaleString() };

    const excel = Excel.getInstance();

    const buffer = excel
      .checkForPrevData()
      .makeFile(dataWithDate)
      .save()
      .getBuffer();
    excel.clear();

    const mailer = Mailer.getInstance(
      process.env.NODEMAILER_HOST!,
      process.env.NODEMAILER_USER!,
      process.env.NODEMAILER_PASS!
    );

    await mailer.sendMail(data.name, data.email, config.sendToEmails, {
      subject: process.env.NODEMAILER_SUBJECT,
      attachments: [
        {
          filename: `${excel.config.filename}.${excel.config.extension}`,
          content: buffer,
        },
      ],
    });
  } catch (e) {
    res.status(500).json({ error: "internal server error" }).end();
  }
};

export { sendContactService };
