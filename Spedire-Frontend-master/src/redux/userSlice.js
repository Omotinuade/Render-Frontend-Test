import {createSlice} from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user:null,


    },
    reducers: {
        SetUser : (state, action) => {
            state.user = action.payload
        },

    }
})

export const {SetUser, SetAllUsers, SetAllChats, SetSelectedChatBox} = userSlice.actions;
export default userSlice.reducer;

