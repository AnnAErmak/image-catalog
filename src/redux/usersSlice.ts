import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


interface UsersState{
  id: string
  name: string
  username?: string
  email?: string

}
export const fetchUsers = createAsyncThunk<UsersState[]>(
  'users/fetchUsers',
  async  function(){
    try {
      const response = await axios.get('http://localhost:3000/users')
      const resData = response.data
      return resData
    }catch(error){
      return (error)
    }
  }
)

const initialState: UsersState[] = []

export const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers:{},
  extraReducers: (builder) =>{
    builder
      .addCase(fetchUsers.fulfilled, (state,action) =>{
        state.push(...action.payload)
      })
  }
})


export const userIdSelector = (state: UsersState) => state.id
export default userSlice.reducer