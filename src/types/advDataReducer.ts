export interface IAdvDataReducer {
    typeAdv: string;
    nameValue: string;
    firstNameValue: string;
    phoneValue: string;
    age: string;
    city: string;
    aboutMe: string;
    myGender: string;
    typeSearch: string;
    numberRooms: string;
    startArea: string;
    endArea: string;
    startPrice: string;
    endPrice: string;
    startPeople: string;
    endPeople: string;
    commentInSearchHouse: string;
    areaImportant: boolean;
    numberRoomsImportant: boolean;
    peopleImportant: boolean;
    priceImportant: boolean;
    typeObject: string;
    area: string;
    year: string;
    rooms: string;
    price: string;
    commentMyObject: string;
    productPhoto: File[] | null;
    genderNeighbor: string;
    searchAgeStart: string;
    searchAgeEnd: string;
    ageImportant: boolean;
    animals: boolean;
    children: boolean;
    badHabits: boolean;
    commentInSearchNeighbor: string;
}

export enum actionType {
    setTypeAdv = "setTypeAdv",
    setNameValue = "setNameValue",
    setFirstNameValue = "setFirstNameValue",
    setPhoneValue = "setPhoneValue",
    setAge = "setAge",
    setCity = "setCity",
    setAboutMe = "setAboutMe",
    setMyGender = "setMyGender",
    setTypeSearch = "setTypeSearch",
    setNumberRooms = "setNumberRooms",
    setStartArea = "setStartArea",
    setEndArea = "setEndArea",
    setStartPrice = "setStartPrice",
    setEndPrice = "setEndPrice",
    setStartPeople = "setStartPeople",
    setEndPeople = "setEndPeople",
    setCommentInSearchHouse = "setCommentInSearchHouse",
    setAreaImportant = "setAreaImportant",
    setNumberRoomsImportant = "setNumberRoomsImportant",
    setPeopleImportant = "setPeopleImportant",
    setPriceImportant = "setPriceImportant",
    setTypeObject = "setTypeObject",
    setArea = "setArea",
    setYear = "setYear",
    setRooms = "setRooms",
    setPrice = "setPrice",
    setCommentMyObject = "setCommentMyObject",
    setProductPhoto = "setProductPhoto",
    setGenderNeighbor = "setGenderNeighbor",
    setSearchAgeStart = "setSearchAgeStart",
    setSearchAgeEnd = "setSearchAgeEnd",
    setAgeImportant = "setAgeImportant",
    setAnimals = "setAnimals",
    setChildren = "setChildren",
    setBadHabits = "setBadHabits",
    setCommentInSearchNeighbor = "setCommentInSearchNeighbor",
    REMOVE = "REMOVE",
}

export interface IActionAdvDataReducer {
    type: string;
    payload: string | boolean | null;
}
