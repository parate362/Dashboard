/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line
import React, { useContext, useState } from "react";
import Reel from "../../../Assets/Reel.svg";
import Image from "../../../Assets/Image.svg";
import Story from "../../../Assets/video.svg";
import { FiCreditCard } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import { Link } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";
import CampaignSummary from "../AddCampaign/CampaignSummary";

const Budget = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const data = contextState.campData;
  const setData = contextState.setCampData;
  const [isModalVisible, setIsModalVisible] = useState(false);
  // const [errors, setErrors] = useState({});
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
  };

  const handleRadioChange = (e) => {
    const { id } = e.target;
    setData({
      ...data,
      fixed: id === "fixed",
      nagotiable: id === "negotiable",
    });
  };

  // console.log(errors);

  console.log(data);
  return (
    <>
      <div
        className={`relative  max-h-[1066px] mx-6 bg-white mt-[112px] ${
          !expanded
            ? "left-[100px] w-[calc(100%-150px)]"
            : "left-[337px] w-[calc(100%-390px)]"
        }  rounded-xl drop-shadow-md`}
      >
        <div className="mx-6">
          <div className="flex gap-2 items-center px-4 pt-7 text-base text-[#202024]">
            <span>Campaigns &gt; </span>
            <span> Add Campaign &gt;</span>
            <span className="text-[#2463EB] font-semibold"> Budget</span>
          </div>
          <hr className="w-full mx-auto my-3" />

          <form
            action=""
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="flex flex-col gap-4 px-4 mt-2">
              <div>
                <h2>Enter payment according to your selection: </h2>
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
            </div>
            <div className="my-3 p-3">
              <div className="flex flex-col mb-4">
                <h2>Select offering</h2>
              </div>
              <div className="flex gap-10 ">
                <label htmlFor="payment">
                  <div
                    className={`w-44 h-40 rounded-lg ${
                      data.payment
                        ? "bg-[#F0F2FF] border-2 border-[#384EDD]"
                        : "bg-[#F6F5F8]"
                    } flex flex-col gap-2 items-center justify-center`}
                  >
                    <input
                      className="sr-only"
                      onChange={handleChange}
                      type="checkbox"
                      name="payment"
                      id="payment"
                      checked={data.payment}
                    />
                    <FiCreditCard className="w-8 h-8 opacity-40" />
                    <span className="text-sm">Payment</span>
                  </div>
                </label>
                <label htmlFor="product">
                  <div
                    className={`w-44 h-40 rounded-lg ${
                      data.product
                        ? "bg-[#F0F2FF] border-2 border-[#384EDD]"
                        : "bg-[#F6F5F8]"
                    } flex flex-col gap-2 items-center justify-center`}
                  >
                    <input
                      className="sr-only"
                      onChange={handleChange}
                      type="checkbox"
                      name="product"
                      id="product"
                      checked={data.product}
                    />
                    <MdOutlineShoppingCart className="w-9 h-9 opacity-40" />
                    <span className="text-sm">Product</span>
                  </div>
                </label>
              </div>
              <div
                className={`${
                  data.payment ? "flex items-center my-7 gap-10" : "hidden"
                }`}
              >
                <label htmlFor="fixed">
                  <div
                    className={`flex items-center gap-3 h-10 w-44 px-6 border rounded-lg ${
                      data.fixed
                        ? "border-[#384EDD] bg-[#F0F2FF]"
                        : "border-[#363939]"
                    }`}
                  >
                    <input
                      className="sr-only"
                      onChange={handleRadioChange}
                      type="radio"
                      name="amount"
                      id="fixed"
                      checked={data.fixed}
                    />

                    <span
                      className={`${
                        data.fixed
                          ? "w-2 h-2 border-[6px] border-[#384EDD]"
                          : "w-4 h-4 border-2 border-[#B1B2B2]"
                      } rounded-full box-content`}
                    ></span>
                    <span className="text-sm font-semibold">Fixed</span>
                  </div>
                </label>
                <label htmlFor="negotiable">
                  <div
                    className={`flex items-center gap-3 h-10 w-44 px-6 border rounded-lg ${
                      data.nagotiable
                        ? "border-[#384EDD] bg-[#F0F2FF]"
                        : "border-[#363939]"
                    }`}
                  >
                    <input
                      className="sr-only"
                      onChange={handleRadioChange}
                      type="radio"
                      name="amount"
                      id="negotiable"
                      checked={data.nagotiable}
                    />
                    <span
                      className={`${
                        data.nagotiable
                          ? "w-2 h-2 border-[6px] border-[#384EDD]"
                          : "w-4 h-4 border-2 border-[#B1B2B2]"
                      } rounded-full box-content`}
                    ></span>
                    <span className="text-sm font-semibold">Negotiable</span>
                  </div>
                </label>
              </div>
              <div
                className={`${data.payment ? "max-w-[626.687px]" : "hidden"}`}
              >
                <h2
                  className={`${
                    data.nagotiable ? "block text-lg mb-2" : "hidden"
                  }`}
                >
                  Enter Amount
                </h2>
                <div
                  className={`${
                    data.payment && data.nagotiable ? "block" : "hidden"
                  }`}
                >
                  <input
                    className="w-full"
                    onChange={handleChange}
                    type="range"
                    id=""
                    name="range"
                    min="0"
                    step="1000"
                    max="100000"
                  />
                  <div className="flex justify-between items-center">
                    <span>$0</span>
                    <span>${data.range}</span>
                    <span>$100000+</span>
                  </div>
                </div>
                <div
                  className={`${
                    data.payment & data.fixed ? "block" : "hidden"
                  }`}
                >
                  <input
                    className="w-80 h-12 px-6 border rounded-lg border-[#363939]"
                    type="number"
                    onChange={handleChange}
                    name="fixedAmt"
                    id=""
                    value={data.fixedAmt}
                    placeholder="$ Enter Amount"
                  />
                </div>
                <div
                  className={`${
                    data.payment && data.nagotiable ? "block" : "hidden"
                  }`}
                >
                  <div
                    className={`flex items-center ${
                      data.nagotiable ? "gap-2" : "hidden"
                    }`}
                  >
                    <input
                      className={`w-80 h-12 px-6 border rounded-lg ${
                        data.nagotiable ? "border-[#363939]" : "hidden"
                      }`}
                      type="number"
                      onChange={handleChange}
                      name="min"
                      id=""
                      placeholder="Min Amount"
                      value={data.min}
                    />
                    <span
                      className={`${data.nagotiable ? "block" : "hidden"} px-3`}
                    >
                      To
                    </span>
                    <input
                      className={`w-80 h-12 px-6 border rounded-lg ${
                        data.nagotiable ? "border-[#363939]" : "hidden"
                      }`}
                      type="number"
                      onChange={handleChange}
                      name="max"
                      id=""
                      placeholder="Max Amount"
                      value={data.max}
                    />
                  </div>
                  {/* <div
                    className={`${
                      data.fixed ? "block" : "hidden"
                    } mt-4 flex items-center`}
                  ></div> */}
                </div>
                <div
                  className={`${
                    data.fixed || data.nagotiable ? "block mt-4" : "hidden"
                  } text-sm text-red-500`}
                >
                  <BiSolidError className="inline-block mr-1 text-xl" />
                  <span className="text-red-600">
                    Low balance in your wallet.&nbsp;
                    <span className="underline cursor-pointer">Add now</span>
                  </span>
                </div>
              </div>
              <div className="text-red-400 flex flex-col">
                {/* {errors.offer && <span>{errors.offer}</span>} */}
              </div>
              <div className={`${data.product ? "block mt-8" : "hidden"}`}>
                <textarea
                  className="w-[1007px] h-28 p-5 border rounded-lg border-[#363939]"
                  onChange={handleChange}
                  name="productDesc"
                  id=""
                  placeholder="Product Description"
                ></textarea>
              </div>
              <div
                className={`${
                  data.product ? "flex items-center my-7 gap-10" : "hidden"
                }`}
              >
                <div className=" flex items-center justify-center h-9 w-44 border rounded-lg border-[#384EDD]">
                  <span className="text-sm font-semibold text-[#384EDD]">
                    Add Link
                  </span>
                </div>
                <div className=" flex items-center justify-center h-9 w-44 border rounded-lg border-[#384EDD]">
                  <span className="text-sm font-semibold text-[#384EDD]">
                    Upload
                  </span>
                </div>
              </div>
              <div className="mt-6 flex justify-between">
                <Link to={"/AddCampaign"}>
                  <button className="flex items-center justify-center gap-3 h-10 w-44 px-4 border rounded-[4px] border-[#384EDD]">
                    <span className="text-[#384EDD]">Back</span>
                  </button>
                </Link>
                <div className="flex gap-6">
                  <input
                    type="submit"
                    value="Save"
                    className="flex items-center justify-center gap-3 h-10 w-44 px-4 border rounded-[4px] bg-[#384EDD] border-[#384EDD] text-white"
                  />
                  <button
                    onClick={toggleModal}
                    className="flex items-center justify-center gap-3 h-10 w-44 px-4 border rounded-[4px] bg-[#384EDD] border-[#384EDD] text-white"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <CampaignSummary
          className={`${isModalVisible ? "block" : "hidden"}`}
          isModalVisible={isModalVisible}
          setIsModalVisible={setIsModalVisible}
        />
      </div>
    </>
  );
};

export default Budget;
