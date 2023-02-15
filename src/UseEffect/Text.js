import React from "react";
import { useState, useEffect } from "react";

export const Text = () => {
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("COMPONENT MOUNTED");
        document.title = 'ini bukan useEffect';

        return(() => {
            document.title = 'ini useEffect';
            console.log("COMPONENT UNMOUNTED")
        });
    }, []);

    return (
        <div>
            <input 
                onChange={(e) => {
                    setText(e.target.value);
                }}
            />

            <h1>{text}</h1>
        </div>
    );
}