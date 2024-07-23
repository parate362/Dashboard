import React, { useState, useEffect } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import CountUp from "react-countup";

const CampaignComponent = () => {
  const [activeCampaignsCount, setActiveCampaignsCount] = useState(0);
  const [pastCampaignsCount, setPastCampaignsCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setActiveCampaignsCount(122);
      setPastCampaignsCount(78);
    }, 1000);
  }, []);

  return (
    <div className=" max-h-[296px]" >
    
    <div class="flex flex-col justify-between bg-[#CFF38D] p-4 min-h-[138px] min-w-72 rounded-lg">

  <div class="flex justify-between items-center pl-4 mt-2">
    <div>
      <p class="text-base font-semibold text-[#57595A]  tracking-widest">ACTIVE CAMPAIGNS</p>
      <p class="text-3xl font-bold">{activeCampaignsCount}</p>
    </div>
  </div>


  <div class=" flex justify-end">
    <button class="bg-white p-2 mr-4 rounded-full">
      <KeyboardArrowRightIcon />
    </button>
  </div>
</div>


    <div class="flex flex-col justify-between bg-[#EA8389] mb-4 p-4 min-h-[138px] min-w-72 mt-4 rounded-lg">

  <div class="flex justify-between items-center   pl-4 mt-2">
    <div>
      <p class="text-base font-semibold  text-[#57595A]   tracking-widest">PAST CAMPAIGNS</p>
      <p class="text-3xl font-bold">{pastCampaignsCount}</p>
    </div>
  </div>
  

  <div class="flex justify-end">
    <button class="bg-white p-2 mr-4 rounded-full">
      <KeyboardArrowRightIcon />
    </button>
  </div>
</div>
    </div>
  );
};

export default CampaignComponent;
