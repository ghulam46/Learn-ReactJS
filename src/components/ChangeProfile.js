import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../ReactRouterDom/ReactRouter";

export const ChangeProfile = () => {

    const [newUsername, setNewUsername] = useState("");
    const {setUsername} = useContext(AppContext);

    return (
        <div className="App">
            <input onChange={(e)=>setNewUsername(e.target.value)} />
            <button onClick={() => {setUsername(newUsername)}}>Change Username</button>
        </div>
    );
};