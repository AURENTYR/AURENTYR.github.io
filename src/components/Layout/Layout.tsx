import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";
import Grain from "@/components/Grain/Grain";

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <Grain />
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main ref={mainRef} id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        <div key={pathname} className="page-transition">
          <Outlet />
        </div>
      </main>
      <Footer />
    </>
  );
}
