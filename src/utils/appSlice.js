import {createSlice} from "@reduxjs/toolkit";

const appSlice = createSlice({
    name:"app",
    initialState:{
        open:true, 
        video:[],
        category:"All",
        searchSuggestion:[],
    },
    
});


