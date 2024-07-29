/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line
import React, { useContext, useState } from "react";
import Reel from "../../../Assets/Reel.svg";
import Image from "../../../Assets/Image.svg";
import Story from "../../../Assets/video.svg";
import fileImg from "../../../Assets/fileImg.svg";
import { FiCreditCard } from "react-icons/fi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { BiSolidError } from "react-icons/bi";
import { Link, useLocation } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";
import CampaignSummary from "../AddCampaign/CampaignSummary";

// slider
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import { IoIosCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import { MdChevronRight } from "react-icons/md";

const Budget = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const data = contextState.campData;
  const setData = contextState.setCampData;
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [validationError, setValidationError] = useState("");

  const clearValidationError = () => {
    if (validationError) setValidationError("");
  };

  const toggleModal = () => {
    // Validation for payment and product selection
    if (!data.payment && !data.product) {
      setValidationError(
        "Please select either Payment or Product before proceeding."
      );
      return;
    }

    // Validation for payment fields
    if (data.payment) {
      if (!data.fixed && !data.nagotiable) {
        setValidationError("Please select either Fixed or Negotiable payment.");
        return;
      }
      if (data.fixed && !data.fixedAmt) {
        setValidationError("Please enter a fixed amount.");
        return;
      }
      if (data.nagotiable && (!amount.min || !amount.max)) {
        setValidationError(
          "Please enter both min and max amounts for negotiable payment."
        );
        return;
      }
    }

    // Validation for product description
    if (data.product && !data.productDesc) {
      setValidationError("Please provide a product description.");
      return;
    }

    // Validation when both payment and product are selected
    if (data.payment && data.product) {
      if (data.fixed && !data.fixedAmt) {
        setValidationError("Please enter a fixed amount for payment.");
        return;
      }
      if (data.nagotiable && (!amount.min || !amount.max)) {
        setValidationError(
          "Please enter both min and max amounts for negotiable payment."
        );
        return;
      }
      if (!data.productDesc) {
        setValidationError("Please provide a product description.");
        return;
      }
    }

    // Clear validation error and toggle modal visibility
    setValidationError("");
    setIsModalVisible(!isModalVisible);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setData({ ...data, [name]: type === "checkbox" ? checked : value });
    clearValidationError(); // Clear error message on input change
  };

  const handleRadioChange = (e) => {
    const { id } = e.target;
    setData({
      ...data,
      fixed: id === "fixed",
      nagotiable: id === "negotiable",
    });
    clearValidationError(); // Clear error message on radio change
  };

  // Slider
  const [amount, setAmount] = useState({ min: 0, max: 10000 });
  const [minAmount, setMinAmount] = useState("");
  const [maxAmount, setMaxAmount] = useState("");

  const handleAmountChange = (value) => {
    setAmount(value);
    setMinAmount(value.min.toString());
    setMaxAmount(value.max.toString());
    setData({ ...data, min: value.min, max: value.max }); //update 1
    clearValidationError(); // Clear error message on slider change
  };

  const handleMinAmountChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMinAmount(value.toString());
      setAmount({ ...amount, min: value });
      setData({ ...data, min: value }); // update 2
      clearValidationError(); // Clear error message on input change
    } else {
      setMinAmount("");
    }
  };

  const handleMaxAmountChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setMaxAmount(value.toString());
      setAmount({ ...amount, max: value });
      setData({ ...data, max: value }); // update 2
      clearValidationError(); // Clear error message on input change
    } else {
      setMaxAmount("");
    }
  };

  const addLink = () => {
    setData({ ...data, isAddLink: !data.isAddLink });
  };
  const handleUpload = (e) => {
    setData({ ...data, uploadData: e.target.files[0]?.name });
    console.log(data);
  };

  const handleRemoveUpload=()=>{
    setData({ ...data, uploadData: "" });
    console.log(data.uploadData);
    console.log(data);
  }
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <>
      <div
        className={`relative max-h-[1196px] mx-6 bg-white mt-[112px] ${
          !expanded
            ? "left-[100px] w-[calc(100%-150px)]"
            : "left-[337px] w-[calc(100%-390px)]"
        } rounded-xl drop-shadow-md`}
      >
        <div className="mx-6">
        <div className="h-[54.85px] border-b">
        <div className="h-[54.85px] border-b">
      <div className="flex flex-row p-6 items-center gap-[3.14px]">
        <Link
          to="/manageCampaign"
          className={`text-[16px] font-normal flex flex-row ${
            currentPath === '/manageCampaign' ? 'text-[#2463eb]' : ''
          }`}
        >
          Campaigns
          <MdChevronRight className="m-1 items-center" size={"15.7px"} />
        </Link>
        <Link
          to="/AddCampaign"
          className={`text-[16px] font-semibold flex flex-row items-center ${
            currentPath === '/AddCampaign' ? 'text-[#2463eb]' : ''
          } gap-x-2`}
        >
          Add Campaigns
          <MdChevronRight className="m-1 items-center" size={"15.7px"} />
        </Link>
        <Link
          to="/budget"
          className={`text-[16px] font-semibold flex flex-row items-center ${
            currentPath === '/budget' ? 'text-[#2463eb]' : ''
          } gap-x-2`}
        >
          Budget
        </Link>
      </div>
    </div>
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
              <div className="flex gap-10">
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
              {validationError && (
                <div className="mt-4 text-red-500 flex items-center gap-2">
                  <BiSolidError className="text-xl" />
                  <span>{validationError}</span>
                </div>
              )}
              <div className={`${data.payment ? "block mt-6" : "hidden"}`}>
                <h2
                  className={` ${
                    data.fixed || data.nagotiable ? "block" : "hidden"
                  }`}
                >
                  Select Payment Method
                </h2>
                <div className="flex mt-4 gap-4">
                  <label htmlFor="fixed">
                    <div
                      className={`flex items-center gap-3 h-10 w-44 px-6 border rounded-lg ${
                        data.fixed
                          ? "border-[#384EDD] bg-[#F0F2FF]"
                          : "border-[#B2BCFF]"
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
                          : "border-[#B2BCFF]"
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
                  className={`${
                    data.payment && data.nagotiable ? "block" : "hidden"
                  }`}
                >
                  <div className="custom-input-range mt-6">
                    <InputRange
                      maxValue={100000}
                      minValue={10}
                      value={amount}
                      onChange={handleAmountChange}
                      formatLabel={(value) => `$${value}`}
                    />
                  </div>
                  <div className="flex space-x-4 mt-10">
                    <div className="flex">
                      <input
                        type="number"
                        border="#363939"
                        placeholder="$ Min Amount"
                        value={minAmount}
                        onChange={handleMinAmountChange}
                        className="w-[301.35px] h-[48px] p-2 border border-gray-300 rounded-lg"
                      />
                    </div>
                    <span className="text-lg mt-2">To</span>
                    <input
                      type="number"
                      placeholder="$ Max. Amount"
                      value={maxAmount}
                      onChange={handleMaxAmountChange}
                      className="w-[301.35px] h-[48px] p-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                </div>
                <div
                  className={`${
                    data.payment && data.fixed ? "block" : "hidden"
                  }`}
                >
                  <input
                    className="w-80 h-12 px-6  mt-6 border rounded-lg border-[#363939]"
                    type="number"
                    onChange={handleChange}
                    name="fixedAmt"
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
                  ></div>
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
              <div className={`${data.product ? "block mt-8" : "hidden"}`}>
                <textarea
                  className="w-[800px] h-28 p-5 border rounded-lg border-[#363939]"
                  onChange={handleChange}
                  name="productDesc"
                  placeholder="Product Description"
                ></textarea>
              </div>
              <div className="mt-6">
                <input
                  type="text"
                  className={`${
                    data.isAddLink ? "block" : "hidden"
                  } w-[400px] h-11 px-6 border text-sm my-5 border-[#363939] rounded-lg`}
                  name=""
                  id=""
                  placeholder="Add link"
                />
                <div className="flex gap-7">
                  {/* <div className="flex items-center px-4 w-[400px] h-11 bg-[#F9F9F9] border border-[#363939] rounded-lg">
                    <span></span>
                    <span className="text-sm">File_Name.jpeg</span>
                  </div> */}
                  <div
                    className={`${
                      data.uploadData &&
                      "relative flex items-center px-4 w-[400px] h-11 bg-[#F9F9F9] border border-[#363939] rounded-lg"
                    }`}
                  >
                    <div className="flex">
                      <img
                        src={fileImg}
                        className={data.uploadData ? "block mx-1" : "hidden"}
                        alt=""
                      />
                      <span className="text-sm cursor-default">
                        {data.uploadData}
                      </span>
                    </div>

                    <IoIosCheckmark
                      className={`${
                        data.uploadData
                          ? "absolute right-12 text-2xl bg-green-600 rounded-full text-white"
                          : "hidden"
                      }`}
                    />
                    <IoCloseSharp
                      className={`${
                        data.uploadData
                          ? "absolute right-3 cursor-pointer"
                          : "hidden"
                      }`}
                      onClick={handleRemoveUpload}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  data.product ? "flex items-center my-7 gap-10" : "hidden"
                }`}
              >
                <div className=" flex items-center justify-center h-9 w-44 border rounded-lg border-[#384EDD]">
                  <button
                    className="text-sm font-semibold h-9 w-44 text-[#384EDD]"
                    onClick={addLink}
                  >
                    Add Link
                  </button>
                </div>
                <label htmlFor="file">
                  <div className="flex items-center justify-center h-9 w-44 cursor-pointer border rounded-lg border-[#384EDD]">
                    <span className="text-sm font-semibold text-[#384EDD]">
                      Upload
                    </span>
                    <input
                      type="file"
                      id="file"
                      onChange={handleUpload}
                      className="sr-only"
                    />
                  </div>
                </label>
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
