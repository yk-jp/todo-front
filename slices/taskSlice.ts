import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface TaskState {
  value: number
}

const initialState: TaskState = {
  value: 0,
}

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = taskSlice.actions

export default taskSlice.reducer