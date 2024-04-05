import { configureStore } from '@reduxjs/toolkit'
import loactionslice from '../slices/loactionslice';
import modeSlice from '../slices/modeSlice';
import loaderSlice from '../slices/loaderSlice';

export const store = configureStore({
    devtools: false,
    reducer:{
        pagePath: loactionslice,
        mode: modeSlice,
        loader: loaderSlice
    }
})