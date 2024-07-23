import React, { useContext } from 'react'
import { Mycontext } from '../utils/Context';
import ActiveCampaign from './Component/ActiveCampaign/ActiveCampaign';
import Budget from '../ManageCampaign/Component/Budget/Budget';
import CampaignBoard from '../ManageCampaign/Component/CampaignBoard/CampaignBoard'
import CampaignSummary from './Component/AddCampaign/CampaignSummary';
import AddCampaign from './Component/AddCampaign/AddCampaign';
import BudgetOrignal from './Component/Budget/BudgetOrignal';

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