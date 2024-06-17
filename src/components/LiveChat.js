import React, { useEffect } from 'react'
import ChatMessage from './ChatMessage';
import { useSelector } from "react-redux";
import {useDispatch} from "react-redux";
import { setMessage } from '../utils/chatSlice';
import { generateRandomName, generateRandomMessage } from '../utils/helper';



