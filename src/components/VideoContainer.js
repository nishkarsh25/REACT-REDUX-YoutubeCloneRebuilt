import React, { useEffect, useState } from 'react'
import axios from "axios";
import API_KEY, { YOUTUBE_VIDEO_API } from '../constant/youtube';
import VideoCart from './VideoCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { setHomeVideo } from '../utils/appSlice';



const VideoContainer = () => {
    const { video, category } = useSelector((store) => store.app);
    console.log(category);
    const dispatch = useDispatch();
    // jab bhi api call/network call kr rhe ho toh apko hmesha useEffect use krna hai
    const fetchingYoutubeVideo = async () => {
        try {
            const res = await axios.get(`${YOUTUBE_VIDEO_API}`);
            dispatch(setHomeVideo(res?.data?.items))
        } catch (error) {
            console.log(error);
        }

    }
    

    
}

