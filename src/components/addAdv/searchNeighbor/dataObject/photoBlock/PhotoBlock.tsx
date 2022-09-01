import React, { useEffect, useState } from "react";
import { IPhotoBlock } from "../../../../../types/PhotoBlock";
import cl from "./PhotoBlock.module.css"

const PhotoBlock: React.FC<IPhotoBlock> = ({ setProductPhoto }) => {
    const [input, setInput] = useState<HTMLInputElement>();
    const [urlMainImg, setUrlMainImg] = useState<string>("");

    useEffect(() => {
        setInput(document.querySelector(`.${cl.input}`) as HTMLInputElement);
    }, [])

    function updateImageDisplay() {
        if (input) {
            const curFiles = input.files;
            
            if (curFiles) {
                setProductPhoto(curFiles[0]);
            }

            if ( (curFiles && curFiles.length === 0) || (curFiles && curFiles.length > 10)) {
                if(curFiles.length === 0){
                    alert("Фотографии не загружены");
                } else if(curFiles.length > 10){
                    alert("Увы, фотографий можно добавить не более 10");
                }
            } else {
                const list = document.createElement('ol');
                list.classList.add(cl.listOl);

                const blockPhoto = document.querySelector(`.${cl.blockPhoto}`);

                const mainIMG = document.createElement('img');
                mainIMG.classList.add(cl.mainImg);

                if(curFiles){
                    setUrlMainImg(window.URL.createObjectURL(curFiles[0]));
                }

                if (blockPhoto) {
                    blockPhoto.appendChild(mainIMG);
                    blockPhoto.appendChild(list);
                }

                if (curFiles) {
                    for (let i = 0; i < curFiles.length; i++) {
                        const listItem = document.createElement('li');
                        listItem.classList.add(cl.li);
                        listItem.style.listStyleType = "none";

                        if (validFileType(curFiles[i])) {

                            const image = document.createElement('img');
                            const textAddPhoto = document.querySelector(`.${cl.textAddPhoto}`);

                            image.classList.add(cl.photo);

                            image.onclick = () => setUrlMainImg(image.src);
                            
                            image.src = window.URL.createObjectURL(curFiles[i]); 
                            listItem.appendChild(image);
                            
                            if(textAddPhoto){
                                textAddPhoto.classList.add(cl.active);
                            }
                        }

                        list.appendChild(listItem);
                    }
                }
            }
        }
    }

    useEffect( () => {
        const mainImg: HTMLImageElement | null = document.querySelector(`.${cl.mainImg}`);

        if(mainImg){
            mainImg.src = urlMainImg;
        }
    }, [urlMainImg])

    let fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ]

    function validFileType(file: File) {
        for(let i = 0; i < fileTypes.length; i++) {
            if(file.type === fileTypes[i]) {
                return true;
            }
        }

        return false;
    }

    return (
        <form className={cl.photoBlock} method="post" encType="multipart/form-data">

            <div className={cl.inputInBlock}>
                <input 
                    className={cl.input} 
                    onChange={updateImageDisplay} 
                    type="file" 
                    id="image_uploads" 
                    name="image_uploads" 
                    accept=".jpg, .jpeg, .png" 
                    multiple
                />
            </div>

            <div className={cl.blockPhoto}>
                <label className={cl.textAddPhoto} htmlFor="image_uploads">Добавить фото (PNG, JPG)</label>
            </div>
        </form>
    )
}

export { PhotoBlock }