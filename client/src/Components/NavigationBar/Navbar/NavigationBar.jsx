import React, { useContext } from 'react';

import { CiSearch } from "react-icons/ci";
import { CgBell, CgTrophy } from "react-icons/cg";
import { FiMessageSquare } from "react-icons/fi";
import { Mycontext } from '../../../utils/Context';


const NavigationBar = () => {

  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;

  return (

    <div   className={`fixed z-10 top-0 ${!expanded && "left-[78px] w-[calc(100%-65px)]"} left-[311px] w-[calc(100%-311px)] bg-white h-24 flex items-center justify-between bg-background  px-4`}>
  
    <div className="relative flex items-center left-8 w-8/12"> 
      <CiSearch className="absolute left-8 text-gray-500 top-1/2 transform -translate-y-1/2 size-5" />

      <input
        type="text"
        placeholder="Search"
        className="w-full h-11 bg-[#F5F5F5]  pl-14 py-1 rounded bg-input text-foreground border border-border focus:outline-none focus:ring-2 focus:ring-ring"
      />
    </div>
 
  <div className="flex items-center  w-44 h-8 pr-4 cursor-pointer justify-between space-x-2"> 

    <FiMessageSquare className='size-7'/>
    <CgTrophy className='size-9'/>
    <CgBell className='size-8'/>

  </div>
</div>

  );
};

export default NavigationBar;