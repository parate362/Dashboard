// import React, { useState } from 'react';
import { BiMoviePlay } from "react-icons/bi";
import { HiOutlinePhoto } from "react-icons/hi2";
import { IoVideocam } from "react-icons/io5";
import { GoRocket } from "react-icons/go";
import { useContext } from "react";
import { Mycontext } from "../../../utils/Context";
// import { TfiVideoClapper } from "react-icons/tfi";
// import { RiGalleryLine } from "react-icons/ri";
// import { CiVideoOn } from "react-icons/ci";

const CampaignSummary = ({ isModalVisible, setIsModalVisible }) => {
//   const [reelsCount, setReelsCount] = useState(1);
//   const [imagesCount, setImagesCount] = useState(0);
//   const [storiesCount, setStoriesCount] = useState(0);
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
    <div>
      {isModalVisible && (
        <div
          id="popup-modal"
          className="fixed top-0 right-0 left-0 z-50 flex justify-center items-center w-full h-full bg-gray-500 bg-opacity-50"
          tabIndex="-1"
        >
          <div className="relative p-4 max-w-md max-h-full">
            <div className="relative w-[514px] h-[629px] bg-white space-y-4 p-8 rounded-[14px] shadow ">
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
              <div class="flex justify-between items-center mb-4">
                <h2 class="text-xl font-semibold text-card-foreground font-sans">
                  {data.campaignName}
                </h2>
                <button
                  class="text-[#384EDD] border rounded px-5 py-1 mr-4 text-sm font-sans hover:bg-[#384EDD] hover:text-[#FFFFFF]"
                  style={{
                    border: "1px solid #384EDD",
                  }}
                >
                  Edit
                </button>
              </div>
              <div class="flex space-x-2 mb-6 gap-[20px] h-[50px] mt-8">
                <button class="flex w-[127px] items-center space-x-1 bg-[#3F59FF] hover:bg-[#C5CDFF] text-[#FFFFFF] px-3 py-2 text-center rounded-[10px] gap-[10px] font-sans ">
                  <BiMoviePlay style={{ fontSize: "20px" }} />
                  <span>{data.reelCount} x Reel</span>
                </button>
                <button class="flex w-[127px] items-center space-x-1 bg-[#3F59FF] hover:bg-[#C5CDFF] text-[#FFFFFF] px-3 py-2 text-center rounded-[10px] gap-[10px] font-sans">
                  <HiOutlinePhoto style={{ fontSize: "20px" }} />
                  <span>{data.postCount} x Image</span>
                </button>
                <button class="flex w-[127px] items-center space-x-1 bg-[#C5CDFF] text-white px-3 py-2 text-center rounded-[10px] gap-[10px] font-sans">
                  <IoVideocam style={{ fontSize: "20px" }} />
                  <span>{data.storyCount} x Story</span>
                </button>
              </div>
              <div class="space-y-6">
                <div class="flex gap-[14px]">
                  <span class="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Platform
                  </span>
                  <span class="text-card-foreground text-bold px-7 font-[600] font-sans">
                    {data.platform}
                  </span>
                </div>
                <div class="flex gap-[14px] ">
                  <span class="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Industry
                  </span>
                  <span class="text-card-foreground px-8 font-[600] font-sans">
                    {data.industry}
                  </span>
                </div>
                <div class="flex  gap-[14px] ">
                  <span class="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Gender
                  </span>
                  <span class="text-card-foreground px-9 font-[600] font-sans">
                    {data.gender}
                  </span>
                </div>
                <div class="flex  gap-[14px] ">
                  <span class="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Location
                  </span>
                  <span class="text-card-foreground px-7 font-[600] font-sans">
                    {data.location}
                  </span>
                </div>
                <div class="flex  gap-[14px] ">
                  <span class="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Duration
                  </span>
                  <span class="text-card-foreground px-7 font-[600] font-sans">
                    {data.startDate} to {data.endDate}
                  </span>
                </div>
                <div class="flex  gap-[14px] ">
                  <span class="text-muted-foreground text-[#717171] font-[400] font-sans">
                    Work type
                  </span>
                  <span class="text-card-foreground px-4 font-[600] font-sans">
                    {data.worktype}
                  </span>
                </div>
                <div class="flex  gap-[14px] ">
                  <span class="text-muted-foreground font-[400] text-[#717171] font-sans">
                    Budget
                  </span>
                  <span class="text-card-foreground px-10 font-[600] font-sans ">
                    {data.payment && !data.product && "Payment / "}
                    {!data.payment && data.product && "Product "}

                    {data.payment && data.product && "payment and Product"}
                    {data.payment && data.product && <br />}

                    {data.payment && data.fixed && `Fixed`}
                    {data.payment && data.nagotiable && `Nagotiable`}
                    <br />
                    {data.payment && data.fixed && `Amount : ${data.fixedAmt}`}
                    {data.payment && data.nagotiable && `Min : ${data.min} | `}
                    {data.payment && data.nagotiable && `Max : ${data.max}`}
                    {data.product && <br />}
                    {data.product && `Product : ${data.productDesc}`}
                  </span>
                </div>
              </div>
              <div class="flex h-[50px] gap-[16px] mt-[50px]">
                <button
                  class="bg-secondary hover:bg-[#384EDD] hover:text-[#FFFFFF] text-[#384EDD] text-secondary-foreground px-4 py-2 rounded border border-secondary"
                  style={{
                    color: "",
                    border: "1px solid #384EDD",
                  }}
                >
                  Save Draft
                </button>
                <button class="bg-gradient-to-r from-blue-600  to-pink-500 to-accent border border-solid border-blue-600 text-white w-[295px]  px-14 py-2 rounded-[6px] flex items-center space-x-5">
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

export default CampaignSummary