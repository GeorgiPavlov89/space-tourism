import { useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../shared/logo.svg"



export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const toggleNav = () => {
        setNavOpen(!navOpen);

    }
    return (
        <nav className="flex">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={toggleNav} className={`mobile-nav-toggle ${navOpen ? "" : "close"}`} aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>

            <div className={`primary-navigation ${navOpen ? "" : "show"} underline-indicators flex`}>
                <div className="nav-link uppercase  text-white letter-spacing-2 ">
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        <p className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>00</span>Home</p>
                    </Link>
                </div>
                <div className="nav-link uppercase text-white letter-spacing-2 ">
                    <Link to="/destination" style={{ textDecoration: 'none' }}>
                        <p className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>01</span>Destination</p>
                    </Link>
                </div>
                <div className="nav-link uppercase text-white letter-spacing-2 ">
                    <Link to="/crew" style={{ textDecoration: 'none' }}>
                        <p className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>02</span>Crew</p>
                    </Link>
                </div>
                <div className="nav-link uppercase text-white letter-spacing-2 ">
                    <Link to="/technology" style={{ textDecoration: 'none' }}>
                        <p className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>03</span>Technology</p>
                    </Link>
                </div>
            </div>
        </nav >

    )
}
