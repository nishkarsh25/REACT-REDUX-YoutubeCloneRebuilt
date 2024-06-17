import React, { useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiVideoOn } from "react-icons/ci";
import Avatar from "react-avatar";
import { CiSearch } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux"
import { toggleSidebar, setCategory, setSearchSuggestion } from "../utils/appSlice";
import { useState } from "react";
import { SEARCH_SUGGESTIONS_API } from "../constant/youtube";
import axios from "axios";

const Navbar = () => {
    const [input, setInput] = useState("");
    const [suggestion, setSuggestion] = useState(false);
    const dispatch = useDispatch();
    const { searchSuggestion } = useSelector((store) => store.app);

    const searchVideo = () => {
        dispatch(setCategory(input));
        setInput("");
    }

    const toggleHandler = () => {
        dispatch(toggleSidebar());
    }

    const showSuggestion = async () => {
        try {
            const res = await axios.get(SEARCH_SUGGESTIONS_API + input);
            dispatch(setSearchSuggestion(res?.data[1]))
        } catch (error) {
            console.log(error);
        }
    }

    const openSuggestion = () => {
        setSuggestion(true);
    }

    

    
}

