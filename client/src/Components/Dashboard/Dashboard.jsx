import React, { useContext } from 'react'
import CampaignComponent from './Campaigns/CampaignComponent'
import PieChartComponent from './PieChart/PieChartComponent'
import RoiComponent from './ROI/RoiComponent'
import BarGrapghComponent from './BarGrapgh/BarGrapghComponent'
import InvestmentStats from './InvestmentStats/InvestmentStats'
import { Mycontext } from '../../utils/Context'


const Dashboard = () => {
const contextState = useContext(Mycontext);
const expanded = contextState.expanded;
  return (
    <div class={` flex relative top-20 ${
      !expanded
        ? "left-[100px] w-[calc(100%-110px)]"
        : "left-[350px] w-[calc(100%-360px)]"
    }  overflow-y-auto  bg-[#F5F5F5] space-y-4 p-4 `}>
    <div class="flex flex-col justify-between mt-6 mb-2 max-w-72 ">
     <CampaignComponent/>
     <PieChartComponent/>
    </div>
  
    <div class="flex flex-col w-10/12 ml-6 mr-4 top-2/4 ">
     <BarGrapghComponent expanded={expanded}/>

  <RoiComponent/>
     <InvestmentStats/>
    </div>
  </div>
  )
}

export default Dashboard