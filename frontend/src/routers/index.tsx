import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { appRoutes } from "../config";
import Loading from "../pages/Loading";

const NotFound = lazy(() => import("../pages/NotFound"));
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Products = lazy(() => import("../pages/Products"));
const Blogs = lazy(() => import("../pages/Blogs"));
const Treatments = lazy(() => import("../pages/Treatments"));
const Contact = lazy(() => import("../pages/Contact"));
const Articles = lazy(() => import("../pages/Articles"));

export default function Routers() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path={appRoutes.home} element={<Home />} />
        <Route path={appRoutes.about} element={<About />} />
        <Route path={appRoutes.products} element={<Products />} />
        <Route path={appRoutes.blogs} element={<Blogs />} />
        <Route
          path={`${appRoutes.blogs}${appRoutes.articlesQuery.path}`}
          element={<Articles />}
        />
        <Route path={appRoutes.treatments} element={<Treatments />} />
        <Route path={appRoutes.contact} element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}
