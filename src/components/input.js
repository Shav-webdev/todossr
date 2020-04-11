import React, { useCallback } from "react";

export default function Input({
    type,
    value,
    parentClasses,
    childClasses,
    handleInputChange,
}) {
    const handleChange = useCallback((e) => {
        let value = e.target.value;
        handleInputChange(value);
        // eslint-disable-next-line
    }, []);

    return (
        <div
            className={`form-group w-100 mb-0 mr-2 ${
                parentClasses ? parentClasses : ""
            }`}
        >
            <input
                onChange={handleChange}
                value={value}
                type={type}
                className={`form-control mr-2 ${
                    childClasses ? childClasses : ""
                }`}
            />
        </div>
    );
}
