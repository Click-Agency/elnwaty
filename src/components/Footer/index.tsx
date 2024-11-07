import { useTranslation } from "react-i18next";
import { trim } from "../../utils/functions/general";
import Logo from "../shared/Logo";
import ButtonStyled from "../shared/ButtonStyled";

const Footer = () => {
  const { t } = useTranslation("footer");

  const columns = [
    {
      title: t("columns.about.title"),
      links: [
        { name: t("columns.about.items.about"), link: "/" },
        { name: t("columns.about.items.services"), link: "/" },
        { name: t("columns.about.items.portfolio"), link: "/" },
      ],
    },
    {
      title: t("columns.contact.title"),
      links: [
        { name: t("columns.contact.items.about"), link: "/" },
        { name: t("columns.contact.items.services"), link: "/" },
        { name: t("columns.contact.items.portfolio"), link: "/" },
      ],
    },
    {
      title: t("columns.social.title"),
      links: [
        { name: t("columns.social.items.about"), link: "/" },
        { name: t("columns.social.items.services"), link: "/" },
        { name: t("columns.social.items.portfolio"), link: "/" },
      ],
    },
  ];

  return (
    <footer
      className={trim(`
        flex
        bg-wave-pattern
        items-end
        bg-cover
        pt-28
        md:pt-20
        pb-10
        min-h-[35rem]`)}
    >
      <div
        className={trim(`
          flex
          flex-col
          md:flex-row
          justify-center
          items-center
          md:items-end
          w-full
          2xl:w-[70%]
          xl:w-[90%]
          lg:container
          gap-10
          containerPadding`)}
      >
        <div className="flex flex-col items-center gap-5 flex-1">
          <Logo className="w-72" />
          <p className="text-gray-200">{t("signature")}</p>
          <div></div>
        </div>
        {columns.map(({ title, links }, i) => (
          <div
            key={i}
            className={trim(`
              flex 
              flex-col 
              font-medium 
              gap-3
              md:gap-5
              items-center
              flex-1`)}
          >
            <h3 className="text-responsive-sm text-gray-200">{title}</h3>
            {links.map(({ name }, i) => (
              <ButtonStyled
                key={i}
                size="custom"
                title={name}
                className="justify-start !text-gray-200 font-normal hover:!text-primary"
              />
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
