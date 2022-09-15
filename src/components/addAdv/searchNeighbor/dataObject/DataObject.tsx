import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../../hooks/useTypedSelector";
import cl from "./DataObject.module.css"
import { PhotoBlock } from "./photoBlock/PhotoBlock";
import { actionType } from "../../../../types/advDataReducer"
import { MyInputRedux } from "../../../ui/myInputRedux/MyInputRedux";
import { MyTextareaRedux } from "../../../ui/myTextareaRedux/MyTextareaRedux";

const DataObject: React.FC = () => {
    const dispatch = useDispatch()
    const {
        typeObject,
        area,
        year,
        rooms,
        price,
        commentMyObject,
    } = useTypedSelector(state => state.advData)

    return (
        <div className={cl.dataObject}>
            <p className={cl.intro}>Расскажите о Вашем объекте</p>

            <div className={cl.data}>
                <div className={cl.photoBlock}>
                    <PhotoBlock/>
                </div>

                <div className={cl.info}>
                    <div className={cl.typeSearch}>
                        <div 
                            className={typeObject === "flat" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} 
                            onClick={() => dispatch({type: actionType.setTypeObject, payload: "flat"})}
                        >
                            Квартира
                        </div>

                        <div 
                            className={typeObject === "room" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} 
                            onClick={() => dispatch({type: actionType.setTypeObject, payload: "room"})}
                        >
                            Комната
                        </div>

                        <div 
                            className={typeObject === "house" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} 
                            onClick={() => dispatch({type: actionType.setTypeObject, payload: "house"})}
                        >
                            Дом
                        </div>

                    </div>

                    <div className={cl.oneInputWithWidth}>
                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="Площадь, м" 
                                    value={area} 
                                    typeForDispatch={actionType.setArea}/>
                            </div>

                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="Год постройки" 
                                    value={year} 
                                    typeForDispatch={actionType.setYear}
                                />
                            </div>

                            {
                                (typeObject === "flat" || typeObject === "house")
                                    ?
                                    <div className={cl.oneButton}>
                                        <MyInputRedux 
                                            width="100px" 
                                            height="30px" 
                                            placeholder="Комнат" 
                                            value={rooms} 
                                            typeForDispatch={actionType.setRooms}
                                        />
                                    </div>
                                    :
                                    <div />
                            }

                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="Цена, руб" 
                                    value={price} 
                                    typeForDispatch={actionType.setPrice}
                                />
                            </div>
                        </div>

                        <div className={cl.oneInputWithWidth}>
                            <MyTextareaRedux 
                                width="100%" 
                                height="100px" 
                                placeholder="Комментарий" 
                                value={commentMyObject} 
                                typeForDispatch={actionType.setCommentMyObject}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { DataObject }