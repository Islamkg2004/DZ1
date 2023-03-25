import React from 'react';
import style from '../thirdPage/css/Third.module.css'
import {useNavigate} from "react-router-dom";
const Third = () => {
    const navigate = useNavigate()
    function goToBack () {
        navigate(-1)
    }
    return (
        <div className="container">
            <h1>Third</h1>
            <div className={style.buttons}>
                <button>далее</button>
                <button onClick={goToBack}>назад</button>
            </div>
        </div>
    );
};

export default Third;