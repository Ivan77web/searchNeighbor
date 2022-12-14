import React from "react";
import { IMyTextareaProps } from "../../../types/myTextarea";
import cl from "./MyTextarea.module.css"

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