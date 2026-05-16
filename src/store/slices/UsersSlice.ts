import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { User } from '../../api/services/user/types'
import type { ID } from '../../types'

export interface UsersState {
  favoriteUsers: User[]
}

const initialState: UsersState = {
  favoriteUsers: [],
}

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    addFavoriteUser: (state, action: PayloadAction<User>) => {
      state.favoriteUsers = [...state.favoriteUsers, action.payload]
    },
    removeFavoriteUserById: (state, action: PayloadAction<ID>) => {
      state.favoriteUsers = state.favoriteUsers.filter(( { id }) => id !== action.payload)
    },
    setFavoriteUsers: (state, action: PayloadAction<User[]>) => {
      state.favoriteUsers = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { addFavoriteUser, removeFavoriteUserById, setFavoriteUsers } = usersSlice.actions

export default usersSlice.reducer