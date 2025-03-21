import { useTranslation } from "react-i18next";
import SectionContainer from "../../shared/containers/SectionContainer";
import SectionHeader from "../../shared/SectionHeader";
import ContactInfo from "./ContactInfo";
import Form from "./Form";
import { trim } from "../../../utils/functions/general";
import useScrollInToView from "../../../hooks/useScrollInToView";

const ContactUs = () => {
  const { t } = useTranslation(["contact", "common"]);
  const { targetRef, isInView } = useScrollInToView();

  return (
    <SectionContainer
      id="contactUs"
      wraperClassName="items-center max-w-none mt-10"
    >
      <SectionHeader title={t("title")} />

      <div
        ref={targetRef}
        className={trim(`
          flex 
          flex-col-reverse
          justify-center  
          md:flex-row
          mt-7
          p-3
          md:p-7
          gap-7
          rounded-3xl
          border-2
          shadow-2xl
          transition-[transform, opacity]
          w-full
          duration-500
          ease-in-out
          md:gap-20
          ${isInView ? "opacity-100" : "opacity-0"}
          ${isInView ? "translate-y-0" : "translate-y-5"}`)}
      >
        <Form />
        <ContactInfo />
      </div>
    </SectionContainer>
  );
};

export default ContactUs;
