import React from 'react'
import "./SliderNumbers.css"
export default function SliderNumbers() {
    return (
        <div className="dot-indicators flex">
            <button aria-selected="true" className=" uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">1</button>
            <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">2</button>
            <button aria-selected="false" className="uppercase ff-sans-cond text-accent bg-dark letter-spacing-2">3</button>
        </div>
    )
}
