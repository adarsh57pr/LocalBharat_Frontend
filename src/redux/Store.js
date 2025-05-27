import { configureStore } from '@reduxjs/toolkit'
import userSlice  from './UserSlice'
import cartSlice from './CartSlice'
import productSlice  from './ProductSlice'
import searchSlice from './SearchSlice'

export default configureStore({
  reducer: {
    user: userSlice,
    cart: cartSlice,
    product: productSlice,
    search: searchSlice

  }
})