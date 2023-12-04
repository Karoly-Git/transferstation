import React, { useState } from "react";

import { BiUserPlus as AddUserIcon } from 'react-icons/bi';
import { AiOutlineEdit as EditUserIcon } from 'react-icons/ai';

export default function Register() {
    const [firstName, setFirstName] = useState("FirstName");
    const [surName, setSurName] = useState("Surname");
    const [pin, setPin] = useState("123");

    const [isRegisterOpen, setIsRegisterOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('name:', `${firstName} ${surName}`, 'pin:', pin);
    };

    return (
        <div className={isRegisterOpen ? 'register register-open' : 'register'}>
            <div className="head-box">
                <span>Register</span>
                <div>
                    <AddUserIcon
                        className="icon add-user-icon"
                        onClick={() => setIsRegisterOpen(!isRegisterOpen)}
                    />
                    <EditUserIcon className="icon" />
                </div>
            </div>
            <form>
                <input
                    onChange={(e) => {
                        setFirstName(e.target.value);
                    }}
                    placeholder="First name"
                ></input>
                <input
                    onChange={(e) => {
                        setSurName(e.target.value);
                    }}
                    placeholder="Surname"
                ></input>
                <input
                    onChange={(e) => {
                        setPin(e.target.value);
                    }}
                    placeholder="PIN"
                ></input>
                <button onClick={handleSubmit}>Add employee</button>
            </form>
        </div>
    );
}
