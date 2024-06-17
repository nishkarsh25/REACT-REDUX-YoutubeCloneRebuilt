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



