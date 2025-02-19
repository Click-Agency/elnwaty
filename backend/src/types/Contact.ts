import { z } from "zod";
import contactSchema from "../schemas/contact.schema";

type Contact = z.infer<typeof contactSchema>;

export default Contact;
