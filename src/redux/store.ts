import {configureStore} from '@reduxjs/toolkit'
import userReducer  from './usersSlice'
import favoriteReducer from './favoritesSlice'

const store = configureStore({
  reducer:{
    users: userReducer,
    favorites: favoriteReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store