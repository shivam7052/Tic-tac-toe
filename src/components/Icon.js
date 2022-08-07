import React from 'react';
import { BsPencilFill } from "react-icons/bs";
import { FaTimes , FaRegCircle } from "react-icons/fa";
const Icon=({name})=>
{
    switch (name) {
        case "circle":
            return <FaRegCircle className="icons"/>;
        case "cross":
            return <FaTimes className="icons"/>;
        default:
            return <BsPencilFill className="icons"/>;
    }
}
export default Icon;
