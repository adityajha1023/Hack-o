import { useEffect, useRef } from "react"
import { Outlet, useLocation } from "react-router-dom"
import Lenis from "@studio-freight/lenis"

import Navigation from "./blocks/Navigation.jsx"
import Footer from "./blocks/Footer.jsx"

function Layout() {
  const location = useLocation()
  const lenisRef = useRef(null)

  // Initialize Lenis once
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: false,
    })

    lenisRef.current = lenis

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
      lenisRef.current = null
    }
  }, [])

  // Reset scroll on route change
  useEffect(() => {
    lenisRef.current?.scrollTo(0, { immediate: true })
  }, [location.pathname])

  return (
    <div className="overflow-x-hidden">
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout
