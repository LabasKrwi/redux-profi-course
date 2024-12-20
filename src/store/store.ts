import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/UserSlicer'
import { PostAPI } from "../services/PostService";


const rootReducer = combineReducers({
    userReducer,
    [PostAPI.reducerPath]: PostAPI.reducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleWare) => 
            getDefaultMiddleWare().concat(PostAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']