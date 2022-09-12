import { IDefaultStateDataUser, IAction } from "../../types/userDataReducer"

const defaultState: IDefaultStateDataUser = {
    name: "",
    firstName: "",
    phone: "",
    id: "",
    email: "",
    gender: "",
    photo: "",
}

export const userDataReducer = (state: IDefaultStateDataUser = defaultState, action: IAction) => {
    switch (action.type) {
        case "addUserData":
            return {
                name: action.payload.name,
                firstName: action.payload.firstName,
                phone: action.payload.phone,
                id: action.payload.id,
                email: action.payload.email,
                gender: action.payload.gender,
                photo: action.payload.photo
            }
        default:
            return state
    }
}