import { configureStore } from '@reduxjs/toolkit'
import firstReducer from './firstSlice'
import appReducer from './appSlice'

export const store = configureStore({
  reducer: {
    myReducerNameInRedux: firstReducer,
    app: appReducer
  }
})
