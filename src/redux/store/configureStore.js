import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../slices/counterSlice'
import {rtkApi} from '../slices/rtkApiSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [rtkApi.reducerPath]: rtkApi.reducer
  },
})