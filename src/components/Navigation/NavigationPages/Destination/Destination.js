import React from 'react'
import Data from "../../../../data.json"
import { useState } from "react"
import './Destination.css'
export default function Destination() {

    const [destination, setDestination] = useState(Data.destinations[0])
    const [active, setActive] = useState("first")

    const changeDestination = (e) => {
        const { name } = e.target
        setActive(name)
        if (name === "first") {

            setDestination(Data.destinations[0])

        } else if (name === "second") {

            setDestination(Data.destinations[1])

        } else if (name === "third") {

            setDestination(Data.destinations[2])

        } else if (name === "fourth") {

            setDestination(Data.destinations[3])

        }

    }
    return (


        <main className="grid-container grid-container--destination flow" key={destination.id}>

            <h1 className="numbered-title"><span>01</span> Pick your destination</h1>


            <img src={destination.images.webp} alt="" />


            <div className=" sliderTab tab-list underline-indicators flex">
                <button onClick={changeDestination} name="first" className={`uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 ${active === "first" ? "activeTab" : ""}`}>Moon</button>
                <button onClick={changeDestination} name="second" className={`uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 ${active === "second" ? "activeTab" : ""}`}>Mars</button>
                <button onClick={changeDestination} name="third" className={`uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 ${active === "third" ? "activeTab" : ""}`}>Europa</button>
                <button onClick={changeDestination} name="fourth" className={`uppercase ff-sans-cond text-accent bg-dark letter-spacing-2 ${active === "fourth" ? "activeTab" : ""}`}>Titan</button>
            </div>

            <article className="destination-info flow">
                <h2 className="fs-800 uppercase ff-serif">{destination.name}</h2>

                <p>{destination.description}</p>


                <div className="destination-meta flex">
                    <div>
                        <h3 className="text-accent fs-200 uppercase">Avg. distance</h3>
                        <p className=" ff-serif uppercase">{destination.distance}</p>
                    </div>
                    <div>
                        <h3 className="text-accent fs-200 uppercase">Est. travel time</h3>
                        <p className=" ff-serif uppercase">{destination.travel}</p>
                    </div>
                </div>
            </article>
        </main>
    )
}
