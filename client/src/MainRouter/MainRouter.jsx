import Dashboard from "../Components/Dashboard/Dashboard";
import React from "react";
import { Route, Routes } from "react-router-dom";
import ManageCampaign from "../ManageCampaign/ManageCampaign";
import Budget from "../ManageCampaign/Component/Budget/Budget";
import CampaignSummary from "../ManageCampaign/Component/AddCampaign/CampaignSummary";
import AddCampaign from "../ManageCampaign/Component/AddCampaign/AddCampaign";
import ActiveCampaign from "../ManageCampaign/Component/ActiveCampaign/ActiveCampaign";

const MainRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/discoverInfluencers"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              Discover Influencers
            </div>
          }
        />
        <Route
          path="/manageCampaign"
          element={
          <ManageCampaign/>
        }
        />
        <Route
          path="/calendar"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Calendar
            </div>
          }
        />
        <Route
          path="/payments"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Payments
            </div>
          }
        />
        <Route
          path="/favorites"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Favorites
            </div>
          }
        />
        <Route
          path="/influencersBase"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Influencers Base
            </div>
          }
        />
        <Route
          path="/settings"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Settings
            </div>
          }
        />
        <Route
          path="/liveSupport"
          element={
            <div className="h-screen w-screen flex items-center justify-center bg-slate-400">
              {" "}
              Live Support
            </div>
          }
        />
        
        <Route
          path="/AddCampaign"
          element={<AddCampaign/>}
        />
         <Route
          path="/budget"
          element={<Budget/>}
        />
         <Route
          path="/CampaignSummary"
          element={<CampaignSummary/>}
        />
        <Route
          path="/ActiveCampaign"
          element={<ActiveCampaign/>}
        />
      </Routes>
      
    </>
  );
};

export default MainRouter;
