import { createSlice } from "@reduxjs/toolkit";


let initialState = '';

let Checklocation = window.location.pathname;
console.log(Checklocation);


export const  loactionslice= createSlice({
    name: 'location',
    initialState: initialState,
    reducers: {
        setLocation: (state, action) => {
            state = action.payload
        }
    }
})

export const { setLocation } = loactionslice.actions;
export default loactionslice.reducer; 