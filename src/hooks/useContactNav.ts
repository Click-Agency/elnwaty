import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../config";

const useContactNav = () => {
  const [contactElement, setContactElement] = useState<HTMLElement | null>(
    null
  );

  const push = useNavigate();

  useEffect(() => {
    const contactElement = document.getElementById("contact");
    setContactElement(() => contactElement);
  }, []);

  const goToContact = () => {
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: "smooth" });
    }

    push(appRoutes.home);
  };

  return goToContact;
};

export default useContactNav;
