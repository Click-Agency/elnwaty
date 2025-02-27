import lztPdf from "../assets/pdf/lzt.pdf";
import catalogPdf from "../assets/pdf/dar-alnawati-catalog.pdf";
import brinePdf from "../assets/pdf/brine.pdf";
import tubesPdf from "../assets/pdf/tubes.pdf";
import venturePdf from "../assets/pdf/venture.pdf";

const appRoutes = {
  home: "/",
  about: "/about-us",
  products: "/our-products",
  treatments: "/our-treatments",
  blogs: "/blogs",
  articlesQuery: {
    ref: "/articles?ref=",
    path: "/articles",
  },
  partners: "/partners",
  contact: "/contact",
};

const info = {
  email: "",
  products: {
    catalog: catalogPdf,
    lzt: lztPdf,
    brine: brinePdf,
    tubes: tubesPdf,
    venture: venturePdf,
  },
};

export { appRoutes, info };
