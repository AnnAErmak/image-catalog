import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Favorite = {
  id: string,
  title: string,
  url: string
}


const initialState: Favorite[] = []

export const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Favorite>) => {
      state.push(action.payload)
    },
    delFavorite: (state, action: PayloadAction<string>) => {
      state.filter(fav => fav.id !== action.payload)
    }
  }
})

export const {addFavorite, delFavorite} = favoritesSlice.actions
export default favoritesSlice.reducer