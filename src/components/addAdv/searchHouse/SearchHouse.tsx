import React from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../../hooks/useTypedSelector";
import { AboutMe } from "../aboutMe/AboutMe";
import { actionType } from "../../../types/advDataReducer"
import cl from "./SearchHouse.module.css"
import { MyInputRedux } from "../../ui/myInputRedux/MyInputRedux";
import { MyTextareaRedux } from "../../ui/myTextareaRedux/MyTextareaRedux";

const SearchHouse: React.FC = () => {
    const dispatch = useDispatch()
    const {
        typeSearch,
        numberRooms,
        startArea,
        endArea,
        startPrice,
        endPrice,
        startPeople,
        endPeople,
        commentInSearchHouse,
        areaImportant,
        numberRoomsImportant,
        peopleImportant,
        priceImportant,
    } = useTypedSelector(state => state.advData)

    const handleImportant = (state: string) => {
        if (state === "area") {
            dispatch({ type: actionType.setStartArea, payload: "" })
            dispatch({ type: actionType.setEndArea, payload: "" })
            dispatch({ type: actionType.setAreaImportant, payload: !areaImportant })
        } else if (state === "rooms") {
            dispatch({ type: actionType.setNumberRooms, payload: "" })
            dispatch({ type: actionType.setNumberRoomsImportant, payload: !numberRoomsImportant })
        } else if (state === "people") {
            dispatch({ type: actionType.setStartPeople, payload: "" })
            dispatch({ type: actionType.setEndPeople, payload: "" })
            dispatch({ type: actionType.setPeopleImportant, payload: !peopleImportant })
        } else if (state === "price") {
            dispatch({ type: actionType.setStartPrice, payload: "" })
            dispatch({ type: actionType.setEndPrice, payload: "" })
            dispatch({ type: actionType.setPriceImportant, payload: !priceImportant })
        }
    }

    return (
        <div className={cl.searchHouse}>
            <div className={cl.aboutMe}>
                <AboutMe />
            </div>

            <div className={cl.searchData}>
                <p className={cl.intro}>??????</p>

                <div className={cl.typeSearch}>
                    <div
                        className={typeSearch === "flat" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch}
                        onClick={() => dispatch({ type: actionType.setTypeSearch, payload: "flat" })}
                    >
                        ????????????????
                    </div>

                    <div
                        className={typeSearch === "room" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch}
                        onClick={() => dispatch({ type: actionType.setTypeSearch, payload: "room" })}
                    >
                        ??????????????
                    </div>

                    <div
                        className={typeSearch === "house" ? cl.oneTypeSearch + " " + cl.active : cl.oneTypeSearch}
                        onClick={() => dispatch({ type: actionType.setTypeSearch, payload: "house" })}
                    >
                        ??????
                    </div>
                </div>

                <div>
                    <div className={cl.oneInputWithWidth}>
                        <p>??????????????</p>

                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="????, ??" 
                                    value={areaImportant ? startArea : "-"} 
                                    typeForDispatch={actionType.setStartArea} 
                                />
                            </div>

                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="????, ??" 
                                    value={areaImportant ? endArea : "-"} 
                                    typeForDispatch={actionType.setEndArea}
                                />
                            </div>

                            <div
                                className={areaImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                onClick={() => handleImportant("area")}
                            >
                                ???? ??????????
                            </div>
                        </div>
                    </div>

                    {
                        (typeSearch === "flat" || typeSearch === "house")
                            ?
                            <div className={cl.oneInputWithWidth}>
                                <p>???????????????????? ????????????</p>

                                <div className={cl.buttons}>
                                    <MyInputRedux 
                                        width="50px" 
                                        height="30px" 
                                        placeholder="????????????" 
                                        value={numberRoomsImportant ? numberRooms : "-"} 
                                        typeForDispatch={actionType.setNumberRooms}
                                    />

                                    <div
                                        className={numberRoomsImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                        onClick={() => handleImportant("rooms")}
                                    >
                                        ???? ??????????
                                    </div>
                                </div>

                            </div>
                            :
                            <div />
                    }

                    <div className={cl.oneInputWithWidth}>
                        <p>?????????? ???????????????????? ??????????????</p>

                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="????" 
                                    value={peopleImportant ? startPeople : "-"} 
                                    typeForDispatch={actionType.setStartPeople}
                                />
                            </div>

                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="????" 
                                    value={peopleImportant ? endPeople : "-"} 
                                    typeForDispatch={actionType.setEndPeople}
                                />
                            </div>

                            <div
                                className={peopleImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                onClick={() => handleImportant("people")}
                            >
                                ???? ??????????
                            </div>
                        </div>
                    </div>

                    <div className={cl.oneInputWithWidth}>
                        <p>????????</p>

                        <div className={cl.buttons}>
                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="????, ??????" 
                                    value={priceImportant ? startPrice : "-"} 
                                    typeForDispatch={actionType.setStartPrice}
                                />
                            </div>

                            <div className={cl.oneButton}>
                                <MyInputRedux 
                                    width="100px" 
                                    height="30px" 
                                    placeholder="????, ??????" 
                                    value={priceImportant ? endPrice : "-"} 
                                    typeForDispatch={actionType.setEndPrice}
                                />
                            </div>

                            <div
                                className={priceImportant ? cl.notImportant : cl.notImportant + " " + cl.notImportantActive}
                                onClick={() => handleImportant("price")}
                            >
                                ???? ??????????
                            </div>
                        </div>
                    </div>

                    <div className={cl.oneInputWithWidth}>
                        <MyTextareaRedux 
                            width="98%" 
                            height="100px" 
                            placeholder="??????????????????????" 
                            value={commentInSearchHouse} 
                            typeForDispatch={actionType.setCommentInSearchHouse}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export { SearchHouse }