import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";
import Nav from "@/components/Nav/Nav";
import Footer from "@/components/Footer/Footer";

export default function Layout() {
  const { pathname } = useLocation();
  const mainRef = useRef<HTMLElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    // Move focus to main content on route change for keyboard/screen-reader users
    mainRef.current?.focus();
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <Nav />
      <main ref={mainRef} id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
