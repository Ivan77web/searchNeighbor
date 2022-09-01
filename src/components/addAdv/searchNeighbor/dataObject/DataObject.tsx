import React, { useState } from "react";
import { MyInput } from "../../../ui/myInput/MyInput";
import { MyTextarea } from "../../../ui/myTextarea/MyTextarea";
import cl from "./DataObject.module.css"
import { PhotoBlock } from "./photoBlock/PhotoBlock";

const DataObject: React.FC = () => {
    const [typeSearch, setTypeSearch] = useState("flat");
    const [area, setArea] = useState("");
    const [year, setYear] = useState("");
    const [rooms, setRooms] = useState("");
    const [price, setPrice] = useState("");
    const [comment, setComment] = useState("")

    const [productPhoto, setProductPhoto] = useState<File | null>();

    return (
        <div className={cl.dataObject}>
            <p className={cl.intro}>Расскажите о Вашем объекте</p>

            <div className={cl.data}>
                <div className={cl.photoBlock}>
                    <PhotoBlock setProductPhoto={setProductPhoto}/>
                </div>

                <div className={cl.info}>
                    <div className={cl.typeSearch}>
                        <div className={typeSearch === "flat" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} onClick={() => setTypeSearch("flat")}>Квартира</div>
                        <div className={typeSearch === "room" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} onClick={() => setTypeSearch("room")}>Комната</div>
                        <div className={typeSearch === "house" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch} onClick={() => setTypeSearch("house")}>Дом</div>
                    </div>

                    <div className={cl.oneInputWithWidth}>
                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="Площадь, м" value={area} setValue={setArea} />
                            </div>

                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="Год постройки" value={year} setValue={setYear} />
                            </div>

                            {
                                (typeSearch === "flat" || typeSearch === "house")
                                    ?
                                    <div className={cl.oneButton}>
                                        <MyInput width="100px" height="30px" placeholder="Комнат" value={rooms} setValue={setRooms} />
                                    </div>
                                    :
                                    <div />
                            }

                            <div className={cl.oneButton}>
                                <MyInput width="100px" height="30px" placeholder="Цена, руб" value={price} setValue={setPrice} />
                            </div>
                        </div>

                        <div className={cl.oneInputWithWidth}>
                            <MyTextarea width="400px" height="100px" placeholder="Комментарий" value={comment} setValue={setComment} />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export { DataObject }