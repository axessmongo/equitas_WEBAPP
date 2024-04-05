import { createSlice } from "@reduxjs/toolkit";

let initialState = false;

const loaderSlice = createSlice({
    name:'mode',
    initialState,
    reducers: {
        setLoader:(state, action)=>{
            return state = action.payload;
        }
    }
})

export const {setLoader} = loaderSlice.actions;
export default loaderSlice.reducer;