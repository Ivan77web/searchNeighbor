import React from "react";
import { useDispatch } from "react-redux";
import { IMyInputReduxProps } from "../../../types/myInputRedux";
import cl from "./MyInputRedux.module.css"

const MyInputRedux: React.FC<IMyInputReduxProps> = ({width, height, placeholder, value, typeForDispatch}) => {
    const dispatch = useDispatch()

    const handleChange: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
        dispatch({type: typeForDispatch, payload: e.target.value})
    }

    return(
        <input 
            className={cl.input}
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

export {MyInputRedux}