import React from 'react';
import style from '../secondPage/css/Second.module.css'
import {useNavigate} from "react-router-dom";
const Second = () => {
    const navigate = useNavigate()
    function goToBak () {
        navigate(-1)
    }
    return (
        <div className="container">
            <h1>Second</h1>
            <div className={style.buttons}>
                <button >далее</button>
                <button onClick={goToBak}>назад</button>
            </div>
        </div>
    );
};

export default Second;