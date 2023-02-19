import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function PredictedAgeWithApi() {

    const [name, setName] = useState("");
    const [predictedAge, setPredictedAge] = useState(0);

    const fetchData = () => {
        axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            setPredictedAge(res.data.age);
        });
    }

    return (
        <div className="App">
            <input placeholder="ex. Ghulam" onChange={(e) => {setName(e.target.value)}} /><br/>
            <button onClick={fetchData}>Predict Age</button>

            <h1>Predicted Age : {predictedAge}</h1>
        </div>
    );
}

export default PredictedAgeWithApi;