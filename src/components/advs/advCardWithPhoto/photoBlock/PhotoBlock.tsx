import { getStorage, getDownloadURL, ref } from "@firebase/storage";
import React, { useEffect, useState } from "react";
import { IPhotoBlockAdvProps } from "../../../../types/photoBlockCard";
import cl from "./PhotoBlock.module.css"

const PhotoBlock: React.FC<IPhotoBlockAdvProps> = ({adv, activePhoto, setActivePhoto}) => {
    const storage = getStorage();
    const [srcArr, setSrcArr] = useState<string[]>([]);

    useEffect(() => {
        let newArr: string[] = [];

        for(let i = 0; i < adv.numberOfPhotos; i++){

            getDownloadURL(ref(storage, `adv_${adv.userId}_${adv.advId}_${i}`)).then((url) => {
                newArr[i] = url
            }).then(() => {
                if(newArr.length === adv.numberOfPhotos){
                    setSrcArr(newArr);
                }
            });
        }
    }, [])

    const backPhoto = () => {
        if (activePhoto === 0) {
            setActivePhoto(adv.numberOfPhotos - 1)
        } else {
            setActivePhoto(activePhoto - 1)
        }
    }

    const increasePhoto = () => {
        if (activePhoto === adv.numberOfPhotos - 1) {
            setActivePhoto(0)
        } else {
            setActivePhoto(activePhoto + 1)
        }
    }

    if (srcArr.length !== adv.numberOfPhotos) {
        return (
            <div>LOADING</div>
        )
    } else {
        return (
            <div className={cl.photo}>
                <div 
                    className={adv.numberOfPhotos !== 1 ? cl.button + " " + cl.buttonBack : cl.none} 
                    onClick={backPhoto}
                >
                    -
                </div>

                <img className={cl.img} src={srcArr[activePhoto]} />

                <div 
                    className={adv.numberOfPhotos !== 1 ? cl.button + " " + cl.buttonIncrease : cl.none} 
                    onClick={increasePhoto}
                >
                    +
                </div>
            </div>
        )
    }
}

export {PhotoBlock}