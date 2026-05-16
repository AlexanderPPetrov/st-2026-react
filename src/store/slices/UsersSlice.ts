import { createSlice, createSelector } from '@reduxjs/toolkit'
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
  selectors: {
    favoriteUsersCount: state => state.favoriteUsers.length

    // isInFavorites: createSelector(
    //   [(state: UsersState) => state.favoriteUsers],
    //   favoriteUsers => favoriteUsers.filter(t => t.completed)
    // ),
  },
  reducers: {
    toggleFavoriteUser: (state, action: PayloadAction<User>) => {
        if(state.favoriteUsers.some(({ id }) => id === action.payload.id)){
            state.favoriteUsers = state.favoriteUsers.filter(( { id }) => id !== action.payload.id)
            return
        }
        state.favoriteUsers = [...state.favoriteUsers, action.payload]
    },
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
export const { toggleFavoriteUser, addFavoriteUser, removeFavoriteUserById, setFavoriteUsers } = usersSlice.actions

export default usersSlice.reducer