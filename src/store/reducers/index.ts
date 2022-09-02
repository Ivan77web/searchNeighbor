import { combineReducers } from "redux";
import { advDataReducer } from "./advDataReducer";
import { isAuthReducer } from "./isAuthReducer";
import { userDataReducer } from "./userDataReducer";

export const rootReducer = combineReducers({
    userData: userDataReducer,
    isAuth: isAuthReducer,
    advData: advDataReducer,
})

export type RootState = ReturnType<typeof rootReducer>