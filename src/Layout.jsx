import { useEffect } from "react";
import Navigation from "./blocks/Navigation.jsx";
import Footer from "./blocks/Footer.jsx";
import { Outlet } from "react-router-dom";
import Lenis from "@studio-freight/lenis";

function Layout() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
