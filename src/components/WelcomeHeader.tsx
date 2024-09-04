import {Input} from "./Input";
import React, {useState} from "react";

export const WelcomeHeader = () => {
    const [name, setName] = useState(localStorage.getItem("name"));

    const handleNameChange = (e: React.FormEvent<HTMLFormElement>) => {
        const newName = (e.currentTarget[0] as HTMLInputElement).value;
        setName(newName);
        localStorage.setItem("name", newName);
    }
    return (
        <h1 className={"text-3xl font-bold text-center flex gap-4"}>
            Welcome{name ? ", " + name :

            <Input className={"text-xl"} placeholder={"...what is your name?"} onSubmit={handleNameChange}/>

        }
        </h1>
    )
}