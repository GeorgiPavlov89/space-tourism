import React from 'react'
import { useState } from 'react'
import "./Crew.css"
import Data from "../../../../data.json"


export default function Crew() {
    const [crewMember, setCrewMember] = useState(Data.crew[0])
    const [active, setActive] = useState("first")

    const changeCrew = (e) => {

        const { name } = e.target
        setActive(name)


        if (e.target.id == 1) {

            setCrewMember(Data.crew[0])

        } else if (e.currentTarget.id == 2) {

            setCrewMember(Data.crew[1])

        } else if (e.currentTarget.id == 3) {

            setCrewMember(Data.crew[2])

        } else if (e.currentTarget.id == 4) {

            setCrewMember(Data.crew[3])

        }

    }


    return (
        <>

            <main className="grid-container grid-container--crew flow" key={crewMember.id} >
                <h1 className="numbered-title"><span>02</span> Meet your crew</h1>
                <article className="crew-details flow" >
                    <header className="flow flow--space-small">
                        <h2 className="fs-600 ff-serif uppercase">{crewMember.role}</h2>
                        <p className="fs-700 uppercase ff-serif">{crewMember.name}</p>
                    </header>
                    <p>{crewMember.bio}</p>
                </article>

                <div className="dot-indicators flex">
                    <button onClick={changeCrew} id="1" name="first" className={active === "first" ? "selected" : ""}><span className="sr-only">The commander</span></button>
                    <button onClick={changeCrew} id="2" name="second" className={active === "second" ? "selected" : ""}><span className="sr-only">The mission specialist</span></button>
                    <button onClick={changeCrew} id="3" name="third" className={active === "third" ? "selected" : ""}><span className="sr-only">The pilot</span></button>
                    <button onClick={changeCrew} id="4" name="fourth" className={active === "fourth" ? "selected" : ""}><span className="sr-only">The crew engineer</span></button>

                </div>


                {/* <SliderDots
                    changeCrew={changeCrew}
                /> */}
                <img src={crewMember.images.webp} alt="" />
            </main>
        </>
    )

}