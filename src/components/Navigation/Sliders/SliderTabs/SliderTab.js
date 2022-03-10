import React from 'react'
import "./SliderTab.css"
export default function SliderTab() {
    return (

        <div className=" sliderTab tab-list underline-indicators flex">
            <button aria-selected="true" className=" uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Moon</button>
            <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Mars</button>
            <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">Europa</button>
        </div>

    )
}
