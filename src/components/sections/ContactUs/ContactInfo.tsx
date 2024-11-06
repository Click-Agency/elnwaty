import { useTranslation } from "react-i18next";
import { trim } from "../../../utils/functions/general";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  const { t } = useTranslation(["home"]);

  const contactInfoArr = [
    {
      icon: <FaPhone className="text-white" />,
      text: t("contactUs.info.phone"),
    },
    {
      icon: <MdEmail className="text-white" />,
      text: t("contactUs.info.email"),
    },
    {
      icon: <FaLocationDot className="text-white" />,
      text: t("contactUs.info.address"),
    },
  ];

  return (
    <div
      className={trim(`
        flex
        flex-col
        h-full
        justify-evenly
        bg-cyan-pattern
        bg-cover
        p-10
        gap-7
        max-w-[450px]
        rounded-3xl`)}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-responsive-lg font-semibold text-white">
          {t("contactUs.info.title")}
        </h3>
        <p className="text-responsive-sm text-gray-100">
          {t("contactUs.info.description")}
        </p>
      </div>

      <ul className={`flex flex-col gap-4 text-responsive-2md`}>
        {contactInfoArr.map((info, i) => (
          <li
            key={i}
            className={trim(`
              flex 
              items-center 
              gap-2`)}
          >
            {info.icon}
            <span className="text-white">{info.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactInfo;
