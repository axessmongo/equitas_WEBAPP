import { createSlice } from "@reduxjs/toolkit";

let initialState = false;

const modeSlice = createSlice({
    name:'mode',
    initialState,
    reducers: {
        setMode:(state, action)=>{
            return state = action.payload;
        }
    }
})

export const {setMode} = modeSlice.actions;
export default modeSlice.reducer;