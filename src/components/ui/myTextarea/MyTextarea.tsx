import React from "react";
import cl from "./MyTextarea.module.css"

interface IMyTextareaProps {
    width: string;
    height: string;
    placeholder: string;
    value: string;
    setValue: (value: string) => void
}

const MyTextarea: React.FC<IMyTextareaProps> = ({ width, height, placeholder, value, setValue }) => {
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setValue(e.target.value)
    }

    return (
        <textarea
            className={cl.textarea}
            style={{
                width: width,
                height: height
            }}
            placeholder={placeholder}
            value={value}
            onChange={handleChange}
        />
    )
}

export { MyTextarea }