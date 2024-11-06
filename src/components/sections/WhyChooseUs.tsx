import SectionContainer from "../shared/containers/SectionContainer";
import machine from "../../assets/imgs/machines.png";
import { useTranslation } from "react-i18next";
import SectionHeader from "../shared/SectionHeader";

const WhyChooseUs = () => {
  const { t } = useTranslation(["home"]);

  return (
    <SectionContainer
      className="bg-moving-wave-pattern bg-cover bg-center"
      wraperClassName="items-center gap-20 py-20"
    >
      <SectionHeader title={t("whyChooseUs.title")} />

      <img
        src={machine}
        alt="machine-png"
        className="block rounded-2xl shadow-xl"
      />
    </SectionContainer>
  );
};

export default WhyChooseUs;
