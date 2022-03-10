import React from 'react'
import { Link } from "react-router-dom"
import "./Navbar.css"
import logo from "../../assets/shared/logo.svg"



export default function Navbar() {
    return (
        <nav className="primary-navigation underline-indicators flex">
            <div className="logo">
                <img src={logo} alt="logo" />
            </div>

            <div className="nav-link uppercase text-white letter-spacing-2 ">
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

        </nav>

    )
}
