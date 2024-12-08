import { useState } from "react";
import SectionContainer from "../../shared/containers/SectionContainer";
import Lightbox from "yet-another-react-lightbox";
import filterChange from "../../../assets/imgs/filter-change-2x.png";
import { Captions, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import SectionHeader from "../../shared/SectionHeader";
import { useTranslation } from "react-i18next";
import useScrollInToView from "../../../hooks/useScrollInToView";
import useActivation from "../../../hooks/useActivation";
import { trim } from "../../../utils/functions/general";
import useRemoveScroll from "../../../hooks/useRemoveScroll";

const images = Array.from({ length: 9 }, (_, i) => i + 1).map(() => ({
  src: filterChange,
}));

const OurProjects = () => {
  const [open, setOpen] = useState(false);

  useRemoveScroll(open);

  const { t } = useTranslation(["home"]);

  const { targetRef, isInView } = useScrollInToView();

  const { activationArr } = useActivation(images.length, 300, {
    initializtion: isInView,
  });

  return (
    <SectionContainer ref={targetRef}>
      <SectionHeader title={t("ourProjects.title")} />
      <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {images.map((image, i) => (
          <li
            key={i}
            className={trim(`
              transition-opacity
              duration-500
              ease-in-out
              ${activationArr[i].active ? "opacity-100" : "opacity-0"}`)}
          >
            <img
              src={image.src}
              alt="gallery"
              className="cursor-pointer"
              onClick={() => setOpen(true)}
            />
          </li>
        ))}
      </ul>
      <Lightbox
        plugins={[Captions, Zoom, Thumbnails]}
        open={open}
        slides={images}
        close={() => setOpen(false)}
      />
    </SectionContainer>
  );
};

export default OurProjects;
