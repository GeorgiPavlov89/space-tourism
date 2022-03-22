import { useState } from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../shared/logo.svg"



export default function Navbar() {
    const [navOpen, setNavOpen] = useState(false);
    const [isActive, setActive] = useState("home");
    const toggleNav = () => {
        setNavOpen(!navOpen);

    }

    const navClickActive = (e) => {

        const { name } = e.currentTarget
        setActive(name)

    }
    return (
        <nav className="flex">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>
            <button onClick={toggleNav} className={`mobile-nav-toggle ${navOpen ? "" : "close"}`} aria-controls="primary-navigation"><span className="sr-only" aria-expanded="false">Menu</span></button>

            <div className={`primary-navigation ${navOpen ? "" : "show"}  underline-indicators flex`}>

                <Link to="/space-tourism" style={{ textDecoration: 'none' }} onClick={navClickActive} name="home" className={isActive === "home" ? "active" : ""}>
                    <div name="home" className="nav-link uppercase   text-white letter-spacing-2" >
                        <p onClick={navClickActive} name="home" className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>00</span>Home</p>
                    </div>
                </Link>


                <Link to="space-tourism/destination" style={{ textDecoration: 'none' }} onClick={navClickActive} name="destination" className={isActive === "destination" ? "active" : ""} >
                    <div name="destination" className="nav-link uppercase  text-white letter-spacing-2 " >
                        <p onClick={navClickActive} name="destination" className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>01</span>Destination</p>
                    </div>
                </Link>


                <Link to="space-tourism/crew" style={{ textDecoration: 'none' }} onClick={navClickActive} name="crew" className={isActive === "crew" ? "active" : ""}>
                    <div className="nav-link uppercase text-white letter-spacing-2 ">
                        <p onClick={navClickActive} name="crew" className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>02</span>Crew</p>
                    </div>
                </Link>

                <Link to="space-tourism/technology" style={{ textDecoration: 'none' }} onClick={navClickActive} name="technology" className={isActive === "technology" ? "active" : ""}>
                    <div className="nav-link uppercase text-white letter-spacing-2 ">
                        <p onClick={navClickActive} name="technology" className="ff-sans-cond uppercase text-white letter-spacing-2 "><span>03</span>Technology</p>
                    </div>
                </Link>

            </div>
        </nav >

    )
}
