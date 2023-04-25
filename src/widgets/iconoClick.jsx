import React from 'react'
import { SlUser, SlMagnifier, SlPencil } from "react-icons/sl";
import "../assets/style.css";

const IconoClick = ({ icono }) => {
    if (icono == "user") {
        return (
            <div className='forIcon' >
                <SlUser />
            </div>
        )
    } else if (icono == "search") {
        return (
            <div className='forIcon' >
                <SlMagnifier />
            </div>
        )
    } else {
        return (
            <div className='forIcon' >
                <SlPencil />
            </div>
        )
    }

}

export default IconoClick
