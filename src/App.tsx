import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout/Layout";

const Home = lazy(() => import("@/pages/Home/Home"));
const Verticals = lazy(() => import("@/pages/Verticals/Verticals"));
const About = lazy(() => import("@/pages/About/About"));
const Contact = lazy(() => import("@/pages/Contact/Contact"));
const Perspective = lazy(() => import("@/pages/Perspective/Perspective"));
const NotFound = lazy(() => import("@/pages/NotFound/NotFound"));

function PageLoader() {
  return (
    <div role="status" aria-live="polite" aria-label="Loading page" style={{ minHeight: "60vh" }} />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route
            index
            element={
              <Suspense fallback={<PageLoader />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="verticals"
            element={
              <Suspense fallback={<PageLoader />}>
                <Verticals />
              </Suspense>
            }
          />
          <Route
            path="about"
            element={
              <Suspense fallback={<PageLoader />}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact"
            element={
              <Suspense fallback={<PageLoader />}>
                <Contact />
              </Suspense>
            }
          />
          <Route
            path="perspective"
            element={
              <Suspense fallback={<PageLoader />}>
                <Perspective />
              </Suspense>
            }
          />
          <Route
            path="*"
            element={
              <Suspense fallback={<PageLoader />}>
                <NotFound />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
