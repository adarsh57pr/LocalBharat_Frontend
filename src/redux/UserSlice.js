import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}


export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser:(state,actions)=>{
      
    }
  }
})

// Action creators are generated for each case reducer function
export const { loginUser } = userSlice.actions

export default userSlice.reducer