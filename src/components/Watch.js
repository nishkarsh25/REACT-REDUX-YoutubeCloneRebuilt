import React, { useEffect, useState } from 'react';
import { useSearchParams } from "react-router-dom";
import API_KEY from '../constant/youtube';
import axios from "axios";
import Avatar from "react-avatar";
import { AiOutlineLike, AiOutlineDislike } from "react-icons/ai";
import { PiShareFatLight } from "react-icons/pi";
import { GoDownload } from "react-icons/go";
import { BsThreeDotsVertical } from "react-icons/bs";
import { LuSendHorizonal } from "react-icons/lu";
import LiveChat from './LiveChat';
import {useDispatch} from "react-redux";
import {setMessage} from "../utils/chatSlice";

const Watch = () => {
    const [input, setInput] = useState("");
    const [singleVideo, setSingleVideo] = useState(null);
    const [searchParams] = useSearchParams();
    const videoId = searchParams.get('v');
    const dispatch = useDispatch();

    const getSingleVideo = async () => {
        try {
            const res = await axios.get(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`);
            setSingleVideo(res?.data?.items[0]);
        } catch (error) {
            console.log(error);
        }
    }

    const sendMessage = () => {
        dispatch(setMessage({name:"Patel", message:input}));
        setInput("");
    }

    



    
}

