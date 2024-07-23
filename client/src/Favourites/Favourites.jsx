import React, { useContext } from 'react'
import { Mycontext } from '../utils/Context';

const Favourites = () => {
    const contextState = useContext(Mycontext);
    const expanded = contextState.expanded;
  return (
    <div className={`flex relative top-[131px] ${
      !expanded
        ? "left-[100px] w-[calc(100%-110px)]"
        : "left-[350px] w-[calc(100%-360px)]"
    }  overflow-y-auto  bg-[#F5F5F5] space-y-4`}>
     favourites
     </div>
  )
}

export default Favourites