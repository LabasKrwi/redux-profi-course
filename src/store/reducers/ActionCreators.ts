import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./UserSlicer";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUsers = () => async(dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch(e){
//         console.log(e);
//         dispatch(userSlice.actions.usersFetchingError((e as Error).message))
//     } 
// }

export const fetchUsers = createAsyncThunk(
    'user/fetchAll', 
    async (_ ,thunkAPI) => {
        try {
            const response = await axios.get<IUser[]>('https://dummyjson.com/users')
            return response.data;
        } catch (e) {
            return thunkAPI.rejectWithValue('Не удалось загрузить пользователей')
        }
    }
)
