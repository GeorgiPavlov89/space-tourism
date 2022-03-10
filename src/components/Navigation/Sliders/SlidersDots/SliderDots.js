import React from 'react'
import "./SliderDots.css"
export default function SliderDots() {
    return (
        <div className="dot-indicators flex">
            <button aria-selected="true"><span className="sr-only">Slide title</span></button>
            <button aria-selected="false"><span className="sr-only">Slide title</span></button>
            <button aria-selected="false"><span className="sr-only">Slide title</span></button>
        </div>
    )
}
