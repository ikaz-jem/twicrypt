import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const createAccount = createAsyncThunk(
    'session/createAccount',
    async (data) => {
        const endpoint = 'http://localhost:4001/users/user_session'
        const headers = {
            'content-type': 'application/json',
            'apikey': 'abc123'
        }
        const body = {
            "bodyAddress": data
        }

        const res = await axios.post(endpoint, body, { headers }).then((res) => res.data)
        return res

    }
)

export const getUserSession = createAsyncThunk(
    'session/getUserSession',
    async(address)=> {
        
        const headers = {
            'content-type': 'application/json',
            'apikey': 'abc123'
        }
        const endpoint =`http://localhost:4001/users/user/${address}`
        const res = await axios.get(endpoint,{headers}).then((res)=>{
        if (res.status==404){
            return true
        }else {
            return res.data
        }}
        )
    return res
    }
)