import React from 'react';
import SideBar, { SidebarItem, SidebarContext } from './SideBar';
import { CalendarDays, Settings, Headphones } from 'lucide-react';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { CgUserList } from "react-icons/cg"
import { CgCrown } from "react-icons/cg";
import { CgDatabase } from "react-icons/cg";
import { MdAttachMoney } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { Link } from 'react-router-dom';

const SidebarContent = () => {
  return (
    <div className="max-w-[340px] ">
      <SideBar>
        <Link to={"/"}>
          <SidebarItem
            icon={<MdOutlineDashboardCustomize size={20} />}
            text="Admin Panel"
          >
            <SidebarItem text="ROI Report" customClass="text-gray-600" />
            <SidebarItem text="Audience Insights" customClass="text-gray-600" />
            <SidebarItem
              text="Manage Influencers"
              customClass="text-gray-600"
            />
          </SidebarItem>
        </Link>
        <Link to={"/discoverInfluencers"}>
          <SidebarItem
            icon={<CgUserList size={20} />}
            text="Discover Influencers"
          />
        </Link>
        <Link to={"/manageCampaign"}>
          <SidebarItem icon={<CgCrown size={20} />} text="Manage Campaign" />
        </Link>
        <Link to={"/calendar"}>
          <SidebarItem icon={<CalendarDays size={20} />} text="Calendar" />
        </Link>
        <Link to={"/payments"}>
          <SidebarItem icon={<MdAttachMoney size={20} />} text="Payments" />
        </Link>
        <Link to={"/viewFavourites"}>
          <SidebarItem icon={<FaRegHeart size={20} />} text="Favorites" />
        </Link>
        <Link to={"/viewProfile"}>
          <SidebarItem icon={<Headphones size={20} />} text="view Profile" />
        </Link>
        <Link to={"/influencersBase"}>
          <SidebarItem
            icon={<CgDatabase size={18} />}
            text="Influencers Base"
          />
        </Link>

        <SidebarContext.Consumer>
          {({ expanded }) =>
            expanded ? (
              <p className="ml-0 text-gray-500 mt-4 mb-4">Account</p>
            ) : (
              <hr className="my-4 border-gray-200" />
            )
          }
        </SidebarContext.Consumer>
        <Link to={"/settings"}>
          <SidebarItem icon={<Settings size={20} />} text="Settings" />
        </Link>
        <Link to={"/liveSupport"}>
          <SidebarItem icon={<Headphones size={20} />} text="Live Support" />
        </Link>
       
      </SideBar>
    </div>
  );
};

export default SidebarContent;
