import { getStorage, getDownloadURL, ref } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IPhotoBlockProps } from "../../../types/PhotoBlockInPage";
import { Loader } from "../../ui/loader/Loader";
import cl from "./PhotoBlock.module.css"

const PhotoBlock: React.FC<IPhotoBlockProps> = ({ number, userId, advId }) => {
    const storage = getStorage();
    const [srcArr, setSrcArr] = useState<string[]>([]);
    const [activePhoto, setActivePhoto] = useState(0)

    useEffect(() => {
        let newArr: string[] = [];

        for (let i = 0; i < number; i++) {

            getDownloadURL(ref(storage, `adv_${userId}_${advId}_${i}`)).then((url) => {
                newArr[i] = url
            }).then(() => {
                if (newArr.length === number) {
                    setSrcArr(newArr);
                }
            });
        }
    }, [])

    const backPhoto = () => {
        if (activePhoto === 0) {
            setActivePhoto(number - 1)
        } else {
            setActivePhoto(activePhoto - 1)
        }
    }

    const increasePhoto = () => {
        if (activePhoto === number - 1) {
            setActivePhoto(0)
        } else {
            setActivePhoto(activePhoto + 1)
        }
    }

    if (srcArr.length !== number) {
        return (
            <Loader/>
        )
    }

    return (
        <div className={cl.block}>
            <div className={cl.mainPhoto}>
                <div
                    className={number !== 1 ? cl.button + " " + cl.buttonBack : cl.none}
                    onClick={backPhoto}
                >
                    -
                </div>

                <img className={cl.img} src={srcArr[activePhoto]} />

                <div
                    className={number !== 1 ? cl.button + " " + cl.buttonIncrease : cl.none}
                    onClick={increasePhoto}
                >
                    +
                </div>
            </div>

            {
                number > 1
                    ?
                    <div className={cl.allPhotos}>
                        {
                            srcArr.map(src =>
                                <img
                                    key={src}
                                    className={cl.smallImg}
                                    src={src}
                                />
                            )
                        }
                    </div>
                    :
                    <div />
            }
        </div>
    )
}

export { PhotoBlock }