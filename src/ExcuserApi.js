import './App.css';
import axios from 'axios';
import { useState } from 'react';

function ExcuserApi()  {
    
    const [generateExcuse, setGenerateExcuse] = useState("");

    const fetchExcuse = (excuse) => {
        axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
            setGenerateExcuse(res.data[0].excuse);
        });
    };

    return (
        <div className='App'>
            <h1>Generate An Excuse</h1>
            <button onClick={() => fetchExcuse("party")}>Party</button><br/>
            <button onClick={() => fetchExcuse("developers")}>Developers</button><br/>
            <button onClick={() => fetchExcuse("gaming")}>Gaming</button>

            <p>{generateExcuse}</p>
        </div>
    );
}

export default ExcuserApi;