export interface IDefaultStateDataUser {
    name: string;
    firstName: string;
    phone: string;
    id: string;
    email: string;
    gender: string;
    photo: string;
}

export interface IAction {
    type: string;
    payload: IDefaultStateDataUser
}