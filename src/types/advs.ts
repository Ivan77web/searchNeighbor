export type IAdv = IAdvSearchWithPhotos | IAdvSearchWithoutPhotos;

export interface IAdvSearchWithPhotos {
    userId: string,
    advId: number,
    typeAdv: string;
    nameValue: string;
    firstNameValue: string;
    phoneValue: string;
    age: string;
    city: string;
    aboutMe: string;
    myGender: string;
    typeObject: string;
    area: string;
    year: string;
    rooms?: string;
    price: string;
    commentMyObject: string;
    genderNeighbor: string;
    searchAgeStart: string;
    searchAgeEnd: string;
    ageImportant: boolean;
    animals: boolean;
    children: boolean;
    badHabits: boolean;
    commentInSearchNeighbor: string;
    numberOfPhotos: number;
}

export interface IAdvSearchWithoutPhotos {
    userId: string,
    advId: number,
    typeAdv: string;
    nameValue: string;
    firstNameValue: string;
    phoneValue: string;
    age: string;
    city: string;
    aboutMe: string;
    myGender: string;
    typeSearch: string;
    numberRooms?: string;
    startArea: string;
    endArea: string;
    startPrice: string;
    endPrice: string;
    startPeople: string;
    endPeople: string;
    commentInSearchHouse: string;
    areaImportant: boolean;
    numberRoomsImportant?: boolean;
    peopleImportant: boolean;
    priceImportant: boolean;
}