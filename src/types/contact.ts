type Contact = {
  name: string;
  email: string;
  type: string;
  phone: string;
  message: string;
};

type ContactTypes = {
  label: string;
  value: string;
}[];

export default Contact;
export type { ContactTypes };
