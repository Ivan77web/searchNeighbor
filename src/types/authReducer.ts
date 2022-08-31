export enum authTypes {
    anonim = "anonim",
    newUser = "newUser",
    user = "user",
    admin = "admin" // Пока не используется
}

export interface IStateAuthReducer {
    auth: string
}

export interface IActionAuth{
    type: string;
}