import axiosInstance from "..";
import { apiRoutes } from "../../config";
import Contact from "../../types/contact";

const createContact = (contactData: Contact) =>
  axiosInstance.post(apiRoutes.contact, contactData);

export { createContact };
