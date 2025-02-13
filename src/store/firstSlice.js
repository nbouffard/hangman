import { createSlice } from '@reduxjs/toolkit'

const initialState = { value: 0 }

export const firstSlice = createSlice({
  name: 'nameUsedAsActionTypeInTheConsole',
  initialState,
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    reset: state => {
      state.value = 0
    }
  }
})

export const { increment, decrement, reset } = firstSlice.actions
export default firstSlice.reducer
