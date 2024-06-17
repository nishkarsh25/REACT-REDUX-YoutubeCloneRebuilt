import React, { useState } from 'react'
import {useDispatch} from "react-redux";
import { setCategory } from '../utils/appSlice';

const buttonList = ["All", "Javascript", "Java", "Live", "Music", "Songs", "Vlogs", "Trending", "Programming", "News", "Technology", "Cricket", "Comedy", "Thriller", "New to you", "Computer Programming", "Netlify", "Coding"]

const ButtonList = () => {
  const [active, setActive] = useState("All");
  const dispatch = useDispatch();

  const videoByTag = (tag) => {
    if (active !== tag) {
      dispatch(setCategory(tag));
      setActive(tag);
    }
  }
  console.log(active);

  return (
    <div className='flex w-full overflow-x-scroll no-scrollbar my-1'>
      {
        
      }

    </div>
  )
}

