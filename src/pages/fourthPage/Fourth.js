import React from 'react';
import style from '../fourthPage/css/Fouth.module.css'
import {useNavigate} from "react-router-dom";
const Fourth = () => {
    const navigate = useNavigate()
    function goToBack () {
        navigate(-1)
    }
    return (
        <div className="container">
            <h1>Fourth</h1>
            <div className={style.buttons}>
                <button>далее</button>
                <button onClick={goToBack}>назад</button>
            </div>
        </div>
    );
};

export default Fourth;