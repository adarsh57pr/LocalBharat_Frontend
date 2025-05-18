import { configureStore } from '@reduxjs/toolkit'
import userSlice  from './UserSlice'
import cartSlice from './CartSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice

  }
})