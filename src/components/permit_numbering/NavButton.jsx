// React Imports
import React, { useState, useRef } from "react";

export default function NavButton(props) {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.text}
        </button>
    );
}
