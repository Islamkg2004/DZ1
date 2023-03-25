import React, {useEffect, useState} from 'react';
import style from '../firstPage/css/First.module.css'
import {useNavigate} from "react-router-dom";
import axios from "axios";
const First = () => {
    const baseURL = "https://jsonplaceholder.typicode.com/users";
    const [post, setPost] = useState(null);

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
    }, []);
    if (!post) return null;
    return (
        <div className="container">
            <tr>

                {
                    post.map((post, k) => (
                        <tr key={k}>
                            <td>{post.id}</td>
                            <td>{post.name}</td>
                            <td>{post.username}</td>
                            <td>{post.email}</td>
                        </tr>
                    ))
                }
            </tr>
            <h1>First</h1>
            <div className={style.buttons}>
                <button>далее</button>
            </div>
        </div>
    );
};

export default First;