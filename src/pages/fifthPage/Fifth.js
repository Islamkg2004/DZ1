import React from 'react';
import style from '../fifthPage/css/Fifth.module.css'
import {useNavigate} from "react-router-dom";

const Fifth = () => {

    const navigate = useNavigate()
    function goToBack () {
        navigate(-1)
    }
    return (

        <div className="container">

            <h1>Fifth</h1>
            <div className={style.buttons}>
                <button onClick={goToBack}>назад</button>
            </div>
        </div>
    );
};

export default Fifth;