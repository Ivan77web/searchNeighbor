import React from "react";
import { useDispatch } from "react-redux";
import { IMyTextareaProps } from "../../../types/myTextareaRedux";
import cl from "./MyTextareaRedux.module.css"

const MyTextareaRedux: React.FC<IMyTextareaProps> = ({ width, height, placeholder, value, typeForDispatch }) => {
    const dispatch = useDispatch()
    const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        dispatch({type: typeForDispatch, payload: e.target.value })
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

export { MyTextareaRedux }