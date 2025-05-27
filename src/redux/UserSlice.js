import { createSlice } from '@reduxjs/toolkit'

let userDetails = JSON.parse(localStorage.getItem('LocalBharat'))
const initialState = {
  login:userDetails? userDetails.login :false,
  token:userDetails? userDetails.token :''
}
export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
     loginUser: (state , action) => {
        state.login=true;
        state.token = action.payload.token;
       
    },

    logoutUser:(state,action)=>{
        localStorage.removeItem('LocalBharat');
        state.login = false;
        state.token = ''
    },

  }
})

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userSlice.actions

export default userSlice.reducer