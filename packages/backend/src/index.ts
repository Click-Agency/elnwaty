import { config } from "dotenv";
import express from "express";
import cors from "cors";
import contactRouter from "./routers/contact.router";
import { apiRoutes } from "./config";
config();

const app = express();

app.use(express.json());
app.use(
  cors({
    credentials: true,
    origin: [process.env.WEB_BASE_URL!],
  })
);

app.use(apiRoutes.contact, contactRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
