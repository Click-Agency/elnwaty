import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import { trim } from "../../../utils/functions/general";

const ContactUs = () => {
  const { t } = useTranslation(["home", "common"]);

  return (
    <SectionContainer wraperClassName="items-center">
      <SectionHeader title={t("contactUs.title")} />

      <div
        className={trim(`
          flex 
          flex-col 
          justify-center 
          md:flex-row
          mt-7
          p-7
          gap-7
          rounded-3xl
          border-2
          shadow-2xl`)}
      >
        <ContactInfo />
        <Form />
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
