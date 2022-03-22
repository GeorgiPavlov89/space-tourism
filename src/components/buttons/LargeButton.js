import React from 'react'
import './LargeButton.css'
import { Link } from "react-router-dom"


export default function LargeButton() {
    return (

        <div>
            <Link to="space-tourism/destination" className="large-button uppercase ff-serif  text-dark bg-white">Explore</Link>
        </div>


    )
}
