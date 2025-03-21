import { ReactNode } from "react";
import { BrowserRouter } from "react-router-dom";
import useI18n from "../hooks/useI18n";
import { Toaster } from "react-hot-toast";

export default function Providers({ children }: { children: ReactNode }) {
  useI18n();

  return (
    <BrowserRouter>
      {" "}
      <Toaster />
      {children}
    </BrowserRouter>
  );
}
