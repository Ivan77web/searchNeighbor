import { setDoc, doc } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';
import React, { useContext } from "react";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { Context } from "../..";
import cl from "./AddAdv.module.css"
import { SearchNeighbor } from "./searchNeighbor/SearchNeighbor";
import { SearchHouse } from "./searchHouse/SearchHouse";
import { MyButton } from "../ui/myButton/MyButton";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { actionType } from "../../types/advDataReducer"

const AddAdv: React.FC = () => {
    const { auth, firestore } = useContext(Context);
    const storage = getStorage();
    const dispatch = useDispatch()
    const [user] = useAuthState(auth)

    const {
        typeAdv, nameValue, firstNameValue, phoneValue, age,
        city, aboutMe, myGender, typeSearch, numberRooms,
        startArea, endArea, startPrice, endPrice, startPeople,
        endPeople, commentInSearchHouse, areaImportant,
        numberRoomsImportant, peopleImportant, priceImportant,
        typeObject, area, year, rooms, price, commentMyObject,
        productPhoto, genderNeighbor, searchAgeStart, searchAgeEnd,
        ageImportant, animals, children, badHabits, commentInSearchNeighbor
    } = useTypedSelector(state => state.advData)

    const getLengthObject = (obj: object) => {
        let count = 0;

        for (let key in obj) { count++ }

        return count;
    }

    const addAdv = async () => {
        if (user) {
            const advId = Date.now()
            let photos: object = productPhoto
            let legthPhotos = getLengthObject(photos) !== 0 ? getLengthObject(photos) - 2 : 0;

            if (nameValue && firstNameValue && phoneValue && age && city && myGender) {
                if (typeAdv === "searchNeighbor") {
                    if (searchAgeStart && searchAgeEnd || !ageImportant) {
                        if (typeObject === "flat" || typeObject === "house") {
                            if (area && year && rooms && price && productPhoto) {
                                const advObj = {
                                    userId: user.uid,
                                    advId: advId,
                                    typeAdv: typeAdv,
                                    nameValue: nameValue,
                                    firstNameValue: firstNameValue,
                                    phoneValue: phoneValue,
                                    age: age,
                                    city: city,
                                    aboutMe: aboutMe,
                                    myGender: myGender,
                                    typeObject: typeObject,
                                    area: area,
                                    year: year,
                                    rooms: rooms,
                                    price: price,
                                    commentMyObject: commentMyObject,
                                    genderNeighbor: genderNeighbor,
                                    searchAgeStart: searchAgeStart,
                                    searchAgeEnd: searchAgeEnd,
                                    ageImportant: ageImportant,
                                    animals: animals,
                                    children: children,
                                    badHabits: badHabits,
                                    commentInSearchNeighbor: commentInSearchNeighbor,
                                    numberOfPhotos: legthPhotos,
                                }

                                await setDoc(doc(firestore, "allAdvsWithPhotos", `adv_${user.uid}_${advId}`), advObj);
                                await setDoc(doc(firestore, `privateAdv_${user.uid}_withPhotos`, `adv_${user.uid}_${advId}`), advObj);

                                for (let i = 0; i < legthPhotos; i++) {
                                    const storageRef = ref(storage, `adv_${user.uid}_${advId}_${i}`);
                                    uploadBytes(storageRef, productPhoto[i]);
                                }

                                dispatch({ type: actionType.REMOVE })
                            } else {
                                alert("Заполните все данные о Вашем объекте")
                            }
                        } else if (typeObject === "room") {
                            if (area && year && price && productPhoto) {
                                const advObj = {
                                    userId: user.uid,
                                    advId: advId,
                                    typeAdv: typeAdv,
                                    nameValue: nameValue,
                                    firstNameValue: firstNameValue,
                                    phoneValue: phoneValue,
                                    age: age,
                                    city: city,
                                    aboutMe: aboutMe,
                                    myGender: myGender,
                                    typeObject: typeObject,
                                    area: area,
                                    year: year,
                                    price: price,
                                    commentMyObject: commentMyObject,
                                    genderNeighbor: genderNeighbor,
                                    searchAgeStart: searchAgeStart,
                                    searchAgeEnd: searchAgeEnd,
                                    ageImportant: ageImportant,
                                    animals: animals,
                                    children: children,
                                    badHabits: badHabits,
                                    commentInSearchNeighbor: commentInSearchNeighbor,
                                    numberOfPhotos: legthPhotos,
                                }

                                await setDoc(doc(firestore, "allAdvsWithPhotos", `adv_${user.uid}_${advId}`), advObj);
                                await setDoc(doc(firestore, `privateAdv_${user.uid}_withPhotos`, `adv_${user.uid}_${advId}`), advObj);

                                for (let i = 0; i < legthPhotos; i++) {
                                    const storageRef = ref(storage, `adv_${user.uid}_${advId}_${i}`);
                                    uploadBytes(storageRef, productPhoto[i]);
                                }

                                dispatch({ type: actionType.REMOVE })
                            } else {
                                alert("Заполните все данные о Вашем объекте")
                            }
                        }
                    } else {
                        alert("Заполните все данные о Вашем потенциальном соседе")
                    }

                } else if (typeAdv === "searchHouse") {
                    if (typeSearch === "flat" || typeSearch === "house") {
                        if (
                            (startArea && endArea || !areaImportant) &&
                            (startPeople && endPeople || !peopleImportant) &&
                            (startPrice && endPrice || !priceImportant) &&
                            (numberRooms || !numberRoomsImportant)
                        ) {
                            const advObj = {
                                userId: user.uid,
                                advId: advId,
                                typeAdv: typeAdv,
                                nameValue: nameValue,
                                firstNameValue: firstNameValue,
                                phoneValue: phoneValue,
                                age: age,
                                city: city,
                                aboutMe: aboutMe,
                                myGender: myGender,
                                typeSearch: typeSearch,
                                numberRooms: numberRooms,
                                startArea: startArea,
                                endArea: endArea,
                                startPrice: startPrice,
                                endPrice: endPrice,
                                startPeople: startPeople,
                                endPeople: endPeople,
                                commentInSearchHouse: commentInSearchHouse,
                                areaImportant: areaImportant,
                                numberRoomsImportant: numberRoomsImportant,
                                peopleImportant: peopleImportant,
                                priceImportant: priceImportant,
                            }

                            await setDoc(doc(firestore, "allAdvsWithoutPhotos", `adv_${user.uid}_${advId}`), advObj);
                            await setDoc(doc(firestore, `privateAdv_${user.uid}_withoutPhotos`, `adv_${user.uid}_${advId}`), advObj);

                            dispatch({ type: actionType.REMOVE })
                        } else {
                            alert("Заполните все данные об объекте")
                        }
                    } else if (typeSearch === "room") {
                        if (
                            (startArea && endArea || !areaImportant) &&
                            (startPeople && endPeople || !peopleImportant) &&
                            (startPrice && endPrice || !priceImportant)
                        ) {
                            const advObj = {
                                userId: user.uid,
                                advId: advId,
                                typeAdv: typeAdv,
                                nameValue: nameValue,
                                firstNameValue: firstNameValue,
                                phoneValue: phoneValue,
                                age: age,
                                city: city,
                                aboutMe: aboutMe,
                                myGender: myGender,
                                typeSearch: typeSearch,
                                startArea: startArea,
                                endArea: endArea,
                                startPrice: startPrice,
                                endPrice: endPrice,
                                startPeople: startPeople,
                                endPeople: endPeople,
                                commentInSearchHouse: commentInSearchHouse,
                                areaImportant: areaImportant,
                                peopleImportant: peopleImportant,
                                priceImportant: priceImportant,
                            }

                            await setDoc(doc(firestore, "allAdvsWithoutPhotos", `adv_${user.uid}_${advId}`), advObj);
                            await setDoc(doc(firestore, `privateAdv_${user.uid}_withoutPhotos`, `adv_${user.uid}_${advId}`), advObj);

                            dispatch({ type: actionType.REMOVE })
                        } else {
                            alert("Заполните все данные об объекте")
                        }
                    }
                }
            } else {
                alert("Нужно заполнить всю информацию о себе")
            }
        }
    }

    return (
        <div className={cl.addAdv}>
            <div className="container">
                <div className={cl.typeAdv}>
                    <div
                        className={typeAdv === "searchNeighbor" ? cl.searchNeighbor + " " + cl.active : cl.searchNeighbor}
                        onClick={() => dispatch({ type: actionType.setTypeAdv, payload: "searchNeighbor" })}
                    >
                        Ищу соседа
                    </div>

                    <div
                        className={typeAdv === "searchNeighbor" ? cl.searchHouse : cl.active + " " + cl.searchHouse}
                        onClick={() => dispatch({ type: actionType.setTypeAdv, payload: "searchHouse" })}
                    >
                        Ищу квартиру для подслеления
                    </div>
                </div>

                <div className={cl.data}>
                    {
                        typeAdv === "searchNeighbor"
                            ?
                            <SearchNeighbor />
                            :
                            <SearchHouse />
                    }
                </div>

                <div className={cl.buttonAdd} onClick={addAdv}>
                    <MyButton width="100%" height="60px" bg="rgb(133, 33, 26)" color="white" name="Опубликовать" />
                </div>
            </div>
        </div>
    )
}

export { AddAdv }