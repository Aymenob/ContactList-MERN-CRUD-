import { configureStore } from '@reduxjs/toolkit'
import  counterSlice from "../Redux/slice"


export const store = configureStore({
  reducer: {
   Users:counterSlice
  }
})
