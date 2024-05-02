import { configureStore } from '@reduxjs/toolkit'
import loactionslice from '../slices/loactionslice';
import modeSlice from '../slices/modeSlice';
import loaderSlice from '../slices/loaderSlice';
import userDataSlice from '../slices/userDataSlice';
import setToast from '../slices/ToastSlice';

export const store = configureStore({
    devtools: false,
    reducer: {
        pagePath: loactionslice,
        mode: modeSlice,
        loader: loaderSlice,
        userdata: userDataSlice,
        settoast: setToast,
    }
})