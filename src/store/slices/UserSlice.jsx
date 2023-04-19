import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: [],
  reducers: {
    addUser(state, action) {
      state.push(action.payload);
    },
    removeUser(state, action) {
      // state.pop(action.payload);
      //   let userIndexNum = state.indexOf(action.payload);
      console.log(action.payload, 'heloooo');
      state.splice(action.payload, 1);
    },
    deleteUsers(state, action) {},
  },
});

console.log(userSlice);

export default userSlice.reducer;
export const { addUser, removeUser } = userSlice.actions;
