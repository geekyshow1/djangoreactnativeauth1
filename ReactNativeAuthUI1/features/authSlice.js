import { createSlice } from '@reduxjs/toolkit'
const initialState = {
  access_token: null
}
export const authSlice = createSlice({
  name: 'auth_access_token',
  initialState,
  reducers: {
    setUserAccessToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
    unSetUserAccessToken: (state, action) => {
      state.access_token = action.payload.access_token
    },
  }
})

export const { setUserAccessToken, unSetUserAccessToken } = authSlice.actions
export default authSlice.reducer