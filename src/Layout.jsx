import React from 'react'
import Navigation from './blocks/Navigation.jsx'
import Footer from './blocks/Footer.jsx'
import { Outlet } from 'react-router-dom'

function Layout() {
    return (
        <div>
            <Navigation />
            <Outlet />
            <Footer />
        </div>
    )
}

export default Layout
