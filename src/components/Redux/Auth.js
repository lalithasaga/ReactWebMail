import {createSlice} from '@reduxjs/toolkit';


const initialtoken = localStorage.getItem('token');

const initialemail = localStorage.getItem('email');

const isLogin = !!initialtoken


const initialAuthState = {
    isLogin: isLogin,
    token:initialtoken,
    email:initialemail,
    expiration: null,
    email1:initialemail,
}

const authSlice = createSlice({
    name: 'Auth',
    initialState: initialAuthState,
    reducers: {
        login(state,action)
        {
            state.token = action.payload.token
            state.email = action.payload.email
            state.isLogin = true
            state.expiration = action.payload.expiration
            state.email1 = action.payload.eamil1
            localStorage.setItem('token', action.payload.token)
            localStorage.setItem('email', action.payload.email)
            localStorage.setItem('expiration', action.payload.expiration)
        },
        logout(state)
        {
            state.token = null
            state.email = null
            state.isLogin = false
            state.email1 = null
            localStorage.removeItem('token')
            localStorage.removeItem('email')
            localStorage.removeItem('expiration')
            localStorage.removeItem('email1')
        }

    }
})

export default authSlice.reducer;
export const Authactions = authSlice.actions; 
