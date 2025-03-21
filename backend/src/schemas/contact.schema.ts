import { z } from "zod";

const contactSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Username must be at least 3 characters." })
    .max(50, { message: "Username must be less than 50 characters." }),

  email: z
    .string()
    .email({ message: "Email must contain the @ symbol and a domain name." })
    .min(1, { message: "Email is required." })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/, {
      message: "Email must contain the @ symbol and a domain name.",
    }),

  type: z
    .string()
    .min(1, { message: "Type is required." })
    .max(100, { message: "Type must be less than 100 characters." }),

  phone: z
    .string()
    .min(1, { message: "Phone is required." })
    .min(5, { message: "Phone must be more than 4 digits." })
    .max(15, { message: "Phone must be less than 15 digits" })
    .refine((value) => !isNaN(Number(value)), {
      message: "Phone must be a number.",
    }),

  message: z
    .string()
    .min(1, { message: "Message is required." })
    .min(10, { message: "Message must be at least 10 characters." }),
});

export default contactSchema;
