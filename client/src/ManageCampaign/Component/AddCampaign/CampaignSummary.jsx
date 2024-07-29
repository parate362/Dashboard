import React, { useContext } from 'react';
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { Mycontext } from "../../../utils/Context";
import { Link } from "react-router-dom";
import Reel from "../../../Assets/Reel.svg";
import Image from "../../../Assets/Image.svg";
import Story from "../../../Assets/video.svg";

const CampaignSummary = ({ isModalVisible, setIsModalVisible }) => {
  const contextState = useContext(Mycontext);
  const data = contextState.campData;

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const ViewContentButton = ({ buttonIcons, buttonTexts, buttonStyle }) => {
    return (
      <button className="flex w-32 h-28 items-center justify-center text-white font-medium rounded-lg mx-2 mb-2 ">
        <span>{buttonIcons}</span>
        <span>{buttonTexts}</span>
      </button>
    );
  };

  return (
    <div className='w-full h-auto'>
      {isModalVisible && (
        <div
          id="popup-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-auto bg-gray-500 bg-opacity-50"
          tabIndex="-1"
        >
          <div className="relative p-4 max-w-md max-h-full">
            <div className="relative w-[514px] h-auto bg-white space-y-4 p-8 rounded-[14px] shadow ">
              <button
                type="button"
                className="absolute top-3 right-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={toggleModal}
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-card-foreground font-sans">
                  {data.campaignName}
                </h2>
                <Link to={"/AddCampaign"}>
                  <button
                    className="text-[#384EDD] border rounded px-5 py-1 mr-4 text-sm font-sans hover:bg-[#384EDD] hover:text-[#FFFFFF]"
                    style={{
                      border: "1px solid #384EDD",
                    }}
                  >
                    Edit
                  </button>
                </Link>
              </div>
              <div className="flex gap-[18px] items-center">
                <div
                  className={`w-44 h-20 rounded-xl ${
                    data.reelCount ? "bg-[#3F59FF]" : "bg-[#B2BCFF]"
                  } p-3 flex justify-center items-center gap-3`}
                >
                  <img src={Reel} alt="reel" className="w-6 h-6" />
                  <span className="text-sm text-white">
                    {data.reelCount} x Reel
                  </span>
                </div>

                <div
                  className={`w-44 h-20 rounded-xl ${
                    data.postCount ? "bg-[#3F59FF]" : "bg-[#B2BCFF]"
                  } p-3 flex justify-center items-center gap-3`}
                >
                  <img src={Image} alt="reel" className="w-6 h-6" />
                  <span className="text-sm text-white">
                    {data.postCount} x Image
                  </span>
                </div>

                <div
                  className={`w-44 h-20 rounded-xl ${
                    data.storyCount ? "bg-[#3F59FF]" : "bg-[#B2BCFF]"
                  } p-3 flex justify-center items-center gap-3`}
                >
                  <img src={Story} alt="story" className="w-6 h-6" />
                  <span className="text-sm text-white">
                    {data.storyCount} x Story
                  </span>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex gap-[14px]">
                  <span className="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Platform
                  </span>
                  <span className="text-card-foreground text-bold px-7 font-[600] font-sans">
                    {data.selectedOptionsplatform.map(platform => platform.label).join(", ")}
                  </span>
                </div>
                <div className="flex gap-[14px] ">
                  <span className="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Industry
                  </span>
                  <span className="text-card-foreground px-8 font-[600] font-sans">
                    {data.selectedOptionsindustry.map(industry => industry.label).join(", ")}
                  </span>
                </div>
                <div className="flex  gap-[14px] ">
                  <span className="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Gender
                  </span>
                  <span className="text-card-foreground px-9 font-[600] font-sans">
                    {data.gender}
                  </span>
                </div>
                <div className="flex  gap-[14px] ">
                  <span className="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Location
                  </span>
                  <span className="text-card-foreground px-7 font-[600] font-sans">
                    {data.selectedOptionslocation.map(location => location.label).join(", ")}
                  </span>
                </div>
                <div className="flex  gap-[14px] ">
                  <span className="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Duration
                  </span>
                  <span className="text-card-foreground px-7 font-[600] font-sans">
                    {data.startDate} to {data.endDate}
                  </span>
                </div>
                <div className="flex  gap-[14px] ">
                  <span className="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Work type
                  </span>
                  <span className="text-card-foreground px-4 font-[600] font-sans">
                    {data.worktype}
                  </span>
                </div>
                <div className="flex  gap-[14px] ">
                  <span className="text-muted-foreground font-[400] text-[#717171] font-sans">
                    Budget
                  </span>
                  <span className="text-card-foreground px-10 font-[600] font-sans ">
                    {data.payment && !data.product && "Payment / "}
                    {!data.payment && data.product && "Product "}

                    {data.payment && data.product && "payment and Product"}
                    {data.payment && data.product && <br />}

                    {data.payment && data.fixed && "Fixed"}
                    {data.payment && data.nagotiable && "Negotiable"}
                    <br />
                    {data.payment && data.fixed && `Amount : ${data.fixedAmt}`}
                    {data.payment && data.nagotiable && `Min : ${data.min} | `}
                    {data.payment && data.nagotiable && `Max : ${data.max}`}
                    {data.product && <br />}
                    {data.product && `Product : ${data.productDesc}`}
                  </span>
                </div>
              </div>
              <div className="flex h-[50px] gap-[16px] mt-[50px]">
                <button
                  className="bg-secondary hover:bg-[#384EDD] hover:text-[#FFFFFF] text-[#384EDD] text-secondary-foreground px-4 py-2 rounded border border-secondary"
                  style={{
                    color: "",
                    border: "1px solid #384EDD",
                  }}
                >
                  Save Draft
                </button>
                <button className="bg-gradient-to-r from-blue-600  to-pink-500 to-accent border border-solid border-blue-600 text-white w-[295px]  px-14 py-2 rounded-[6px] flex items-center space-x-5">
                  <span>Launch campaign</span>
                  <GoRocket style={{ fontSize: "24px" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CampaignSummary;
