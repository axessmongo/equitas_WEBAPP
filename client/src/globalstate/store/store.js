import { configureStore } from '@reduxjs/toolkit'
import loactionslice from '../slices/loactionslice'

export const store = configureStore({
    devtools: false,
    reducer:{
        pagePath: loactionslice
    }
})