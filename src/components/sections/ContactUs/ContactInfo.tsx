import { useTranslation } from "react-i18next";
import { trim } from "../../../utils/functions/general";
import { FaPhone, FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const ContactInfo = () => {
  const { t } = useTranslation(["contact"]);

  const contactInfoArr = [
    {
      icon: <FaPhone className="text-white" />,
      text: t("info.phone"),
    },
    {
      icon: <MdEmail className="text-white" />,
      text: t("info.email"),
    },
    {
      icon: <FaLocationDot className="text-white" />,
      text: t("info.address"),
    },
  ];

  return (
    <div
      className={trim(`
        flex
        flex-col
        h-full
        justify-around
        bg-cyan-pattern
        bg-cover
        w-full
        p-10
        gap-7
        rounded-3xl`)}
    >
      <div className="flex flex-col gap-4">
        <h3 className="text-responsive-lg font-semibold text-white">
          {t("info.title")}
        </h3>
        <p className="text-responsive-sm text-gray-100">
          {t("info.description")}
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
