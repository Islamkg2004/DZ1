import React from 'react';
import {NavLink} from "react-router-dom";
import style from "../transitionPage/css/Transition.module.css"
const Transition = () => {
    return (
        <ul>
            <li >
                <NavLink to="/" className="link">First Page</NavLink>
            </li>
            <li>
                <NavLink to="/second" className="link">Second Page</NavLink>
            </li>
            <li>
                <NavLink to="/third" className="link">Third Page</NavLink>
            </li>
            <li>
                <NavLink to="/fourth" className="link">Fouth Page</NavLink>
            </li>
            <li>
                <NavLink to="fifth" className="link" >Fifth Page</NavLink>
            </li>
        </ul>
    );
};

export default Transition;