import React from 'react'
import './Technology.css'
import Data from "../../../../data.json"
import { useState } from "react"

export default function Technology() {

    const [technology, setTechnology] = useState(Data.technology[0])
    const [isActive, setIsActive] = useState("first")

    const changeLaunch = (e) => {

        const { name } = e.target
        setIsActive(name)


        if (name === "first") {

            setTechnology(Data.technology[0])

        } else if (name === "second") {

            setTechnology(Data.technology[1])

        } else if (name === "third") {

            setTechnology(Data.technology[2])

        }

    }


    return (
        <main className="grid-container--technology flow" key={technology.id} >
            <h1 className="numbered-title"><span>03</span> Space launch 101</h1>

            <picture className="launch-image">
                <source media="(min-width: 45em)" srcSet={technology.images.portrait}></source>
                <source media="(min-width: 35em)" srcSet={technology.images.landscape}></source>
                <img src={technology.images.landscape} alt="" />
            </picture>
            <div className="number-indicators flex">
                <button onClick={changeLaunch} name="first" className={`fs-400 ff-serif ${isActive === "first" ? "active-number" : ""} `}>1</button>
                <button onClick={changeLaunch} name="second" className="fs-400 ff-serif" >2</button>
                <button onClick={changeLaunch} name="third" className="fs-400 ff-serif" >3</button>
            </div>

            <article className="technology-details flow" >

                <p className="text-accent fs-400 uppercase letter-spacing-2">the terminoly...</p>
                <p className="fs-600 uppercase ff-serif teacnology-name">{technology.name}</p>

                <p className="text-accent ff-serif fs-400">{technology.description}</p>
            </article>

        </main>
    )
}