import { useState } from "react";
import SectionContainer from "../../shared/containers/SectionContainer";
import Lightbox from "yet-another-react-lightbox";
import filterChange from "../../../assets/imgs/filter-change-2x.png";
import { Captions, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import SectionHeader from "../../shared/SectionHeader";
import { useTranslation } from "react-i18next";

const images = Array.from({ length: 9 }, (_, i) => i + 1).map(() => ({
  src: filterChange,
}));

const Gallery = () => {
  const [open, setOpen] = useState(false);

  const { t } = useTranslation(["home"]);

  return (
    <SectionContainer>
      <SectionHeader title={t("ourProjects.title")} />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {images.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt="gallery"
            className="cursor-pointer"
            onClick={() => setOpen(true)}
          />
        ))}
      </div>
      <Lightbox
        plugins={[Captions, Zoom, Thumbnails]}
        open={open}
        slides={images}
        close={() => setOpen(false)}
      />
    </SectionContainer>
  );
};

export default Gallery;
