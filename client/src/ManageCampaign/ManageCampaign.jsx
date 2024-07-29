import React, { useContext } from 'react'
import { Mycontext } from '../utils/Context';
import CampaignBoard from '../ManageCampaign/Component/CampaignBoard/CampaignBoard'


const ManageCampaign = () => {
    const contextState = useContext(Mycontext);
const expanded = contextState.expanded;
  return (
    <div className={`flex relative top-20 ${
        !expanded
          ? "left-[100px] w-[calc(100%-110px)]"
          : "left-[350px] w-[calc(100%-360px)]"
      }  overflow-y-auto  bg-[#F5F5F5] space-y-4`}>
   
       <CampaignBoard/>
    
    </div>
  )
}

export default ManageCampaign