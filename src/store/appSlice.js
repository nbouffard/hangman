import { createSlice } from '@reduxjs/toolkit'

const initialState = { a: 0 }

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {}
})

export default appSlice.reducer
