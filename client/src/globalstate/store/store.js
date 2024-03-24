import { configureStore } from '@reduxjs/toolkit'
import loactionslice from '../slices/loactionslice';
import modeSlice from '../slices/modeSlice';

export const store = configureStore({
    devtools: false,
    reducer:{
        pagePath: loactionslice,
        mode: modeSlice
    }
})