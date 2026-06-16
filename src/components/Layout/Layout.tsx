import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
