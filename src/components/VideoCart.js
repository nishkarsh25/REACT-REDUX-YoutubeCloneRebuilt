import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Avatar from "react-avatar";
import API_KEY from '../constant/youtube';


const VideoCart = ({item}) => {
    const [ytIcon, setYtIcon] = useState("");
    const getYoutubeChannelName = async () =>{
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${item.snippet.channelId}&key=${API_KEY}`)
            setYtIcon(res.data.items[0].snippet.thumbnails.high.url);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getYoutubeChannelName();
    },[])

    
}

