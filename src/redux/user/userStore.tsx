import {  createSlice } from '@reduxjs/toolkit';


const initialState  = {
   user:{}
}

export const userStore = createSlice({
  name: 'user',
  initialState,
  reducers: {
    addUser: (state, action) => {
        state.user={...action.payload}
    },
    removeUser: (state, action) => {
        state.user={}
      },
  },
});

export const { addUser , removeUser} = userStore.actions;

export default userStore.reducer;
