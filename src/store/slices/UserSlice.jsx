import { createSlice } from '@reduxjs/toolkit';
import { clearAllUsers } from '../actions';

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
    // clearAllUsers(state, action) {
    //   return [];
    // },
  },
  extraReducers(builder) {
    builder.addCase(clearAllUsers, () => {
      return [];
    });
  },
});

console.log(userSlice);

export default userSlice.reducer;
// export const { addUser, removeUser, clearAllUsers } = userSlice.actions;
export const { addUser, removeUser } = userSlice.actions;
