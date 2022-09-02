// import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IAdvDataReducer, actionType, IActionAdvDataReducer } from "../../types/advDataReducer"

const defaultState: IAdvDataReducer = {
    typeAdv: "searchNeighbor",
    // nameValue: useTypedSelector(state => state.userData.name),
    // firstNameValue: useTypedSelector(state => state.userData.firstName),
    // phoneValue: useTypedSelector(state => state.userData.phone),
    nameValue: "",
    firstNameValue: "",
    phoneValue: "",
    age: "",
    city: "",
    aboutMe: "",
    myGender: "men",
    typeSearch: "flat",
    numberRooms: "",
    startArea: "",
    endArea: "",
    startPrice: "",
    endPrice: "",
    startPeople: "",
    endPeople: "",
    commentInSearchHouse: "",
    areaImportant: true,
    numberRoomsImportant: true,
    peopleImportant: true,
    priceImportant: true,
    typeObject: "flat",
    area: "",
    year: "",
    rooms: "",
    price: "",
    commentMyObject: "",
    productPhoto: null,
    genderNeighbor: "men",
    searchAgeStart: "",
    searchAgeEnd: "",
    ageImportant: true,
    animals: false,
    children: false,
    badHabits: false,
    commentInSearchNeighbor: "",
}

export const advDataReducer = (state: IAdvDataReducer = defaultState, action: IActionAdvDataReducer) => {
    switch (action.type) {
        case actionType.setTypeAdv:
            return { ...state, typeAdv: action.payload }

        case actionType.setNameValue:
            return { ...state, nameValue: action.payload }

        case actionType.setFirstNameValue:
            return { ...state, firstNameValue: action.payload }

        case actionType.setPhoneValue:
            return { ...state, phoneValue: action.payload }

        case actionType.setAge:
            return { ...state, age: action.payload }

        case actionType.setCity:
            return { ...state, city: action.payload }

        case actionType.setAboutMe:
            return { ...state, aboutMe: action.payload }

        case actionType.setMyGender:
            return { ...state, myGender: action.payload }

        case actionType.setTypeSearch:
            return { ...state, typeSearch: action.payload }

        case actionType.setNumberRooms:
            return { ...state, numberRooms: action.payload }

        case actionType.setStartArea:
            return { ...state, startArea: action.payload }

        case actionType.setEndArea:
            return { ...state, endArea: action.payload }

        case actionType.setStartPrice:
            return { ...state, startPrice: action.payload }

        case actionType.setEndPrice:
            return { ...state, endPrice: action.payload }

        case actionType.setStartPeople:
            return { ...state, startPeople: action.payload }

        case actionType.setEndPeople:
            return { ...state, endPeople: action.payload }

        case actionType.setCommentInSearchHouse:
            return { ...state, commentInSearchHouse: action.payload }

        case actionType.setAreaImportant:
            return { ...state, areaImportant: action.payload }

        case actionType.setNumberRoomsImportant:
            return { ...state, numberRoomsImportant: action.payload }

        case actionType.setPeopleImportant:
            return { ...state, peopleImportant: action.payload }

        case actionType.setPriceImportant:
            return { ...state, priceImportant: action.payload }

        case actionType.setTypeObject:
            return { ...state, typeObject: action.payload }

        case actionType.setArea:
            return { ...state, area: action.payload }

        case actionType.setYear:
            return { ...state, year: action.payload }

        case actionType.setRooms:
            return { ...state, rooms: action.payload }

        case actionType.setPrice:
            return { ...state, price: action.payload }

        case actionType.setCommentMyObject:
            return { ...state, commentMyObject: action.payload }

        case actionType.setProductPhoto:
            return { ...state, productPhoto: action.payload }

        case actionType.setGenderNeighbor:
            return { ...state, genderNeighbor: action.payload }

        case actionType.setSearchAgeStart:
            return { ...state, searchAgeStart: action.payload }

        case actionType.setSearchAgeEnd:
            return { ...state, searchAgeEnd: action.payload }

        case actionType.setAgeImportant:
            return { ...state, ageImportant: action.payload }

        case actionType.setAnimals:
            return { ...state, animals: action.payload }

        case actionType.setChildren:
            return { ...state, children: action.payload }

        case actionType.setBadHabits:
            return { ...state, badHabits: action.payload }

        case actionType.setCommentInSearchNeighbor:
            return { ...state, commentInSearchNeighbor: action.payload }

        case actionType.REMOVE:
            return defaultState

        default:
            return state
    }
}