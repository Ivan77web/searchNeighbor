import { combineReducers } from "redux";
import { isAuthReducer } from "./isAuthReducer";
import { userDataReducer } from "./userDataReducer";

export const rootReducer = combineReducers({
    userData: userDataReducer,
    isAuth: isAuthReducer
})

export type RootState = ReturnType<typeof rootReducer>