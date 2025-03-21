import { useState } from "react";
import SectionContainer from "../../shared/containers/SectionContainer";
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import SectionHeader from "../../shared/SectionHeader";
import { useTranslation } from "react-i18next";
import useRemoveScroll from "../../../hooks/useRemoveScroll";
import ProjectCard from "./ProjectCard";

import projectOne from "../../../assets/imgs/projects/project-1.png";
import projectTwo from "../../../assets/imgs/projects/project-2.png";
import projectThree from "../../../assets/imgs/projects/project-3.png";
import projectFour from "../../../assets/imgs/projects/project-4.png";
import projectFive from "../../../assets/imgs/projects/project-5.png";
import projectSix from "../../../assets/imgs/projects/project-6.png";
import projectSeven from "../../../assets/imgs/projects/project-7.png";
import projectEight from "../../../assets/imgs/projects/project-8.png";
import projectNine from "../../../assets/imgs/projects/project-9.png";
import projectTen from "../../../assets/imgs/projects/project-10.png";
import projectEleven from "../../../assets/imgs/projects/project-11.png";
import projectTwelve from "../../../assets/imgs/projects/project-12.png";
import projectThirteen from "../../../assets/imgs/projects/project-13.png";
import projectFourteen from "../../../assets/imgs/projects/project-14.png";
import projectFifteen from "../../../assets/imgs/projects/project-15.png";
import projectSixteen from "../../../assets/imgs/projects/project-16.png";
import projectSeventeen from "../../../assets/imgs/projects/project-17.png";
import projectEighteen from "../../../assets/imgs/projects/project-18.png";
import projectNineteen from "../../../assets/imgs/projects/project-19.png";
import projectTwenty from "../../../assets/imgs/projects/project-20.png";
import projectTwentyOne from "../../../assets/imgs/projects/project-21.png";
import projectTwentyTwo from "../../../assets/imgs/projects/project-22.png";
import projectTwentyThree from "../../../assets/imgs/projects/project-23.png";

const images: { src: string }[] = [
  { src: projectOne },
  { src: projectTwo },
  { src: projectThree },
  { src: projectFour },
  { src: projectFive },
  { src: projectSix },
  { src: projectSeven },
  { src: projectEight },
  { src: projectNine },
  { src: projectTen },
  { src: projectEleven },
  { src: projectTwelve },
  { src: projectThirteen },
  { src: projectFourteen },
  { src: projectFifteen },
  { src: projectSixteen },
  { src: projectSeventeen },
  { src: projectEighteen },
  { src: projectNineteen },
  { src: projectTwenty },
  { src: projectTwentyOne },
  { src: projectTwentyTwo },
  { src: projectTwentyThree },
];

const OurProjects = () => {
  const [open, setOpen] = useState(false);

  useRemoveScroll(open);

  const { t } = useTranslation(["home"]);

  return (
    <SectionContainer>
      <SectionHeader title={t("ourProjects.title")} />
      <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 mt-5">
        {images.map((image, i) => (
          <ProjectCard image={image} key={i} setOpen={setOpen} />
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
