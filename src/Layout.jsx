import { useState } from "react"
import { Outlet } from "react-router-dom"
import Loader from "./blocks/Loader.jsx"
import Navigation from "./blocks/Navigation.jsx"
import Footer from "./blocks/Footer.jsx"

export default function Layout() {
  const [loading, setLoading] = useState(true)

  const handleFinish = () => {
    setLoading(false)
  }

  if (loading) {
    return <Loader onFinish={handleFinish} />
  }

  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  )
}
