import { useEffect, useState } from "react";
import "./FetchStyle.css";
import axios from "axios";

function FetchApi() {

    const [catFact, setCatFact] = useState("");

    // Fetch without library
    // fetch("https://catfact.ninja/fact")
    // .then((res) => res.json())
    // .then((data) => {
    //     console.log(data);
    // });
    
    const fetchCatFact = () => {
        // Library Fetch Api
        axios.get("https://catfact.ninja/fact").then((res) => {
        setCatFact(res.data.fact);
        });
    }

    useEffect(() => {
        fetchCatFact();
    }, []);

    return (
        <div className="FetchCSS">
            <button onClick={fetchCatFact}>Generate Cat Fact</button>
            <p className="contentFetch"> {catFact} </p>
        </div>
    );
}

export default FetchApi;