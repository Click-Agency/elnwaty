import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../config";

const useContactNav = () => {
  const [contactElement, setContactElement] = useState<HTMLElement | null>(
    null
  );

  const push = useNavigate();

  useEffect(() => {
    const contactElement = document.getElementById("contactUs");
    setContactElement(() => contactElement);
  }, []);

  const goToContact = () => {
    if (!contactElement) push(appRoutes.home);

    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return goToContact;
};

export default useContactNav;
