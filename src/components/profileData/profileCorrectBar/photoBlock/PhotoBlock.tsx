import React, { useEffect, useState } from "react";
import { IPhotoBlockProps } from "../../../../types/photoBlockCorrectUserData";
import cl from "./PhotoBlock.module.css"

const PhotoBlock: React.FC<IPhotoBlockProps> = ({setImg}) => {
    const [input, setInput] = useState<HTMLInputElement>();

    useEffect(() => {
        setInput(document.querySelector(`.${cl.input}`) as HTMLInputElement);
    }, [])

    function updateImageDisplay() {
        if (input) {
            const curFiles = input.files;

            if (curFiles && curFiles.length === 0) {
                alert("Фотографии не загружены");
            } else {
                if (curFiles && validFileType(curFiles[0])) {
                    const image = document.createElement('img');
                    const textAddPhoto = document.querySelector(`.${cl.textAddPhoto}`);

                    const photoBorder = document.querySelector(`.${cl.photoBorder}`)

                    image.classList.add(cl.photo);
                    image.src = window.URL.createObjectURL(curFiles[0]);

                    if (photoBorder !== null) {
                        photoBorder.appendChild(image);
                    }

                    if (textAddPhoto) {
                        textAddPhoto.classList.add(cl.active);
                    }
                    
                    if(input.files && input.files[0]){
                        setImg(input.files[0])
                    }
                }
            }
        }
    }

    let fileTypes = [
        'image/jpeg',
        'image/pjpeg',
        'image/png'
    ]

    function validFileType(file: File) {
        if (file.type === fileTypes[0]) {
            return true;
        } else{
            return false;
        }
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
                />
            </div>

            <label className={cl.textAddPhoto} htmlFor="image_uploads">Изменить фото</label>

            <div className={cl.blockPhoto}>
                <div className={cl.photoBorder}></div>
            </div>
        </form>
    )
}

export { PhotoBlock }