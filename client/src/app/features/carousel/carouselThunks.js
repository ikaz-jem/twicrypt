
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getCarouselData = createAsyncThunk(
    'carousel/getData',
    async()=>{
        const headers = {
            'content-type':'application/json',
            'apiKey':'abc123'
        }
        const endpoint = 'http://localhost:4001/users/carousel'
        const res =await  axios.get(endpoint,{headers}).then((res)=>res.data)
            return res
    }
)


export const addSlide = createAsyncThunk(
    'carousel/addSlide',
    async(data)=>{
    const { image, name, link, icon, bodyAddress } = data
    const endpoint='http://localhost:4001/users/create_ad'
    const body = {
        "bodyAddress" :bodyAddress,
      "image" : image,
      "name" :name,
      "link" :link,
      "icon" :icon
    }
    const headers = {
        'content-type':'application/json',
        'apiKey':'abc123'
    }
    const res = await axios.post(endpoint ,body,{headers}).then((res)=>res.data)
    console.log(res)  
    return res
    }
)