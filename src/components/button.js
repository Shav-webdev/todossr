import React from "react";

export default function Button({ type, addOnClass, children, handleBtnClick }) {
    const classes = addOnClass ? addOnClass : "";

    return (
        <button
            onClick={handleBtnClick}
            type={type ? type : "button"}
            className={`btn btn-primary ${classes}`}
        >
            {children}
        </button>
    );
}
