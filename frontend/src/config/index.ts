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

const apiRoutes = {
  contact: "/contact",
};

const info = {
  email: "",
  phone: "+966 56 537 1008",
  whatsapp: "https://wa.me/966565371008",
  facebook: "https://www.facebook.com/share/18sBvtJURJ/?mibextid=wwXIfr",
  instagram: "https://www.instagram.com/daralnawatico/",
  location: {
    en: "1 Al Sahili Center - Baladiyah St. - Jeddah",
    ar: "١ مركز السحيلى - شارع البلديه - جدة",
    maps: "https://maps.app.goo.gl/UseKWf9THHLY2yGr8",
  },
  products: {
    catalog: catalogPdf,
    lzt: lztPdf,
    brine: brinePdf,
    tubes: tubesPdf,
    venture: venturePdf,
  },
};

export { appRoutes, info, apiRoutes };
