import React from 'react'
import LargeButton from "../../buttons/LargeButton"

export default function Home() {
    return (
        <div className="grid-container">
            <div>
                <h1 className="text-accent fs-500 ff-sans-cond uppercase letter-spacing-1">So, you want to travel to
                    <span className="fs-900 ff-serif text-white">Space</span></h1>
                <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                    outer space and not hover kind of on the edge of it. Well sit back, and relax
                    because we’ll give you a truly out of this world experience!</p>
            </div>

            <LargeButton />

        </div>
    )
}
