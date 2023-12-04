// React Imports
import React, { useState, useRef } from "react";

export default function NavButton(props) {
    return (
        <button className="btn" onClick={() => props.moveStep(props.action)}>
            {props.action}
        </button>
    );
}
