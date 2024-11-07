import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import { trim } from "../../../utils/functions/general";
import useScrollInToView from "../../../hooks/useScrollInToView";

const ContactUs = () => {
  const { t } = useTranslation(["home", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer wraperClassName="items-center">
      <SectionHeader title={t("contactUs.title")} />

      <div
        ref={targetRef}
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
          shadow-2xl
          transition-[transform, opacity]
          duration-500
          ease-in-out
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-5"}`)}
      >
        <ContactInfo />
        <Form />
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
