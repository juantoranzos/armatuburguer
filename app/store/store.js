import { configureStore } from "@reduxjs/toolkit";
import comboSlice from '../slice/comboSlice'

export const store = configureStore({
    reducer:{
        combos: comboSlice,
    }
})
