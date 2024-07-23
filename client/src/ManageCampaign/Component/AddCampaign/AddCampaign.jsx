import React, { useContext } from "react";
import Select from "react-select";
import { useState } from "react";
import { PiImageBold } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";
import { CgMathMinus } from "react-icons/cg";
import { CgMathPlus } from "react-icons/cg";
import { SlSocialYoutube } from "react-icons/sl";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";

const AddCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const formData = contextState.campData;
  const setFormData = contextState.setCampData;
   // State to handle form data
  // const [formData, setFormData] = useState({
  //   campaignName: "",
  //   description: "",
  //   platform: "",
  //   gender: "",
  //   worktype: "",
  //   industry: "",
  //   selectedOptions: [],
  //   location: "",
  //   startDate: "",
  //   endDate: "",
  //   postCount: 0,
  //   reelCount: 0,
  //   storyCount: 0,
  // });
   // State to handle form errors
  const [errors, setErrors] = useState({});
  // State to handle description word count
  const [descriptionCount, setDescriptionCount] = useState(0);

  const options = [
    { value: "Fashion", label: "Fashion" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Tourism", label: "Tourism" },
  ];
 // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (e.target.name === "description") {
      setDescriptionCount(e.target.value.length);
    }
  };
  const handleMultiSelectChange = (selectedOptions) => {
    setFormData({
      ...formData,
      selectedOptions,
    });
  };
   // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Submit form data
      console.log("Form submitted", formData);
    }
  };
   // Handle increment and decrement for post, reel, and story counts
  const handleIncrement = (field) => {
    setFormData({
      ...formData,
      [field]: formData[field] + 1,
    });
  };

  const handleDecrement = (field) => {
    setFormData({
      ...formData,
      [field]: formData[field] > 0 ? formData[field] - 1 : 0,
    });
  };
  // Validate form data
  const validate = () => {
    const errors = {};

    if (!formData.campaignName)
      errors.campaignName = "Campaign Name is required";
    if (!formData.description) errors.description = "Description is required";
    if (!formData.description.length > 500)
      errors.description = "Description cannot exceed 500 words";
    if (!formData.platform) errors.platform = "Platform is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (!formData.industry) errors.industry = "Industry is required";
    if (!formData.location) errors.location = "Location is required";
    if (!formData.startDate) errors.startDate = "Start Date is required";
    if (!formData.endDate) errors.endDate = "End Date is required";
    if (new Date(formData.endDate) < new Date(formData.startDate))
      errors.endDate = "End Date cannot be before Start Date";
    if (!formData.workType) errors.workType = "Work Type is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle next button click
  const handleNext = () => {
    if (validate()) {
      // Replace '/nextPage' with your next page route
      window.location.href = "/Budget";
    }
  };

  return (
    <div
    className={`relative  max-h-[1066px] mx-6 bg-white mt-[112px] ${
      !expanded
        ? "left-[90px] w-[calc(100%-150px)]"
        : "left-[320px] w-[calc(100%-390px)]"
    }  rounded-xl drop-shadow-md`}
  >
  {/* Campaign Name */}
    <div className="bg-white top-28 my-4 left-[311px] w-full rounded-xl ">
      <div className="h-[54.85px] border-b">
        <div className="flex flex-row p-6 items-center gap-[3.14px]">
          <div className="text-[16px] font-normal flex flex-row ">
            Campaigns
            <MdChevronRight className="m-1 items-center " size={"15.7px"} />
          </div>
          <div className="text-[16px] font-semibold text-[#2463eb] gap-x-2 ">
            Add Campaigns
          </div>
        </div>
      </div>
      <div className="p-6 my-2 ">
        <form onSubmit={handleSubmit}>
          <div className="my-2">
            {" "}
            <label className="text-[18px]">
              Campaign Name <sup className="text-[#2463eb]">*</sup>
            </label>
            <input
              className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5 my-2  focus:outline-none focus:border-blue-600 ${
                errors.campaignName ? "border-red-500" : ""
              }`}
              type="text"
              name="campaignName"
              id="name"
              value={formData.campaignName}
              onChange={handleChange}
              placeholder="John Doe"
            />{" "}
            {errors.campaignName && (
              <p className="text-[#FF424C] text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.campaignName}
              </p>
            )}
          </div>
          <div>
            <textarea
              className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5  focus:outline-none focus:border-[#384edd] ${
                errors.description ? "border-red-500" : ""
              }`}
              name="description"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description"
            >
              Description
            </textarea>
            <div className="text-gray-500 text-sm flex justify-end">
              {descriptionCount}/500
            </div>
            {errors.description && (
              <p className="text-red-500 text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.description}
              </p>
            )}
          </div>
          <div className="my-2">
            <label className="text-base ">
              Select Platform <sup className="text-[#2463eb]">*</sup>
            </label>
            <select
              name="platform"
              value={formData.platform}
              onChange={handleChange}
              placeholder="Instagram"
              className={`border-[0.7px] border-[#363939]  rounded-lg w-full px-[19px] py-1 gap-2.5 my-2 focus:outline-none focus:border-[#384edd] ${
                errors.platform ? "border-red-500" : ""
              }`}
            >
              <option value="Instagram">Instagram</option>
              <option value="Snapchat">Snapchat</option>
              <option value="Facebook">Facebook</option>
              <option value="Twitter">Twitter</option>
            </select>
            {errors.platform && (
              <p className="text-red-500 text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.platform}
              </p>
            )}
          </div>
          <div className="  my-2">
            <label className="text-base flex">
              Select Gender <sup className="text-[#2463eb]">*</sup>{" "}
            </label>
            <div className="flex">
              {["All", "Male", "Female", "Other"].map((gender) => (
                <label
                  key={gender}
                  className={`border w-1/2 mr-2 px-2 py-1 rounded-md ${
                    errors.gender ? "border-red-500" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name="gender"
                    value={gender}
                    checked={formData.gender === gender}
                    onChange={handleChange}
                    className="px-8"
                  />
                  {gender}
                </label>
              ))}
            </div>{" "}
            {errors.gender && (
              <p className="text-red-500 text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.gender}
              </p>
            )}
          </div>
          <div className="my-2">
            <label className="text-base ">
              Select Industry <sup className="text-[#2463eb]">*</sup>
            </label>
            {/* <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5 my-2 focus:outline-none focus:border-[#384edd] ${
                errors.industry ? "border-red-500" : ""
              }`}
            > */}
              {/* <option value="Instagram">Fashion</option>
              <option value="Snapchat">Beauty</option>
              <option value="Facebook">Technology</option>
              <option value="Twitter">Art</option>
            </select> */}
            <Select
            className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5 my-2 focus:outline-none focus:border-[#384edd]${errors.industry ? 'border-red-500' : ''} `}
              isMulti
              name="options"
              options={options}
              value={formData.selectedOptions}
              onChange={handleMultiSelectChange}
            />
            {errors.industry && (
              <p className="text-red-500 text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.industry}
              </p>
            )}
          </div>
          <div className="my-2 ">
            <label className="text-base ">
              Location <sup className="text-[#2463eb]">*</sup>
            </label>
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5 my-2 focus:outline-none focus:border-[#384edd] ${
                errors.location ? "border-red-500" : ""
              } `}
            >
              <option defaultValue={"Select city"}>Select City</option>
              <option value="New Delhi">New Delhi</option>
              <option value="Nagpur">Nagpur</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Pune">Pune</option>
            </select>
            {errors.location && (
              <p className="text-red-500 text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.location}
              </p>
            )}
          </div>

          <div className="flex flex-row justify-start w-full text-gray my-2">
            <div className="w-1/2">
              <label htmlFor="startDate">
                Start Date<sup className="text-[#2463eb]">*</sup>
              </label>
              <input
                type="date"
                name="startDate"
                id="startDate"
                value={formData.startDate}
                onChange={handleChange}
                className={`shadow appearance-none  w-full px-3 py-2 border rounded-md  text-[#B1B2B2]  focus:outline-none focus:shadow-outline ${
                  errors.startDate ? "border-red-500" : ""
                }`}
              />{" "}
              {errors.startDate && (
                <p className="text-red-500 text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.startDate}
                </p>
              )}
            </div>
            <div className="self-end mx-6">To</div>
            <div className="w-1/2">
              <label htmlFor="endDate">
                End Date<sup className="text-[#2463eb]">*</sup>
              </label>
              <input
                type="date"
                name="endDate"
                id="endDate"
                value={formData.endDate}
                onChange={handleChange}
                className={`shadow appearance-none w-full px-3 py-2 border rounded-md  text-[#B1B2B2]  focus:outline-none focus:shadow-outline ${
                  errors.endDate ? "border-red-500" : ""
                }`}
              />{" "}
              {errors.endDate && (
                <p className="text-red-500 text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.endDate}
                </p>
              )}
            </div>
          </div>
          <div className="my-2">
            <label>
              Describe your work <sup className="text-[#2463eb]">*</sup>
            </label>
            <div className="flex w-full">
              <div className="my-2 flex space-x-4 w-full">
                {["Post", "Repost"].map((workType) => (
                  <label
                    key={workType}
                    className={`flex items-center gap-3 h-10 w-full px-6 border rounded-lg ${
                      errors.workType ? "border-red-500" : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="workType"
                      value={workType}
                      checked={formData.workType === workType}
                      onChange={handleChange}
                    />
                    {workType}
                  </label>
                ))}
              </div>
            </div>
            {errors.workType && (
              <p className="text-red-500 text-sm flex flex-row gap-1">
                <span>
                  <RiErrorWarningLine className="m-1" />
                </span>
                {errors.workType}
              </p>
            )}
          </div>

          <div className="flex flex-row gap-[8px] my-4">
            <div>
              <div
                className={
                  formData.postCount > 0
                    ? "flex flex-col border border-[#384EDD] items-center justify-center w-[144px] h-[132px] bg-[#F0F2FF] rounded-[10px]"
                    : "flex flex-col items-center justify-center w-[144px] h-[132px] bg-[#F6F5F8] rounded-[10px]"
                }
              >
                <PiImageBold size={"24px"} />{" "}
                <p className="text-[16px]">Post</p>
              </div>
              <div className="flex flex-row font-semibold p-2 items-center m-3 w-[122px] h-[36px] border border-[#B1B2B2] rounded-md justify-evenly">
                <button
                  type="button"
                  onClick={() => handleDecrement("postCount")}
                >
                  <CgMathMinus />
                </button>{" "}
                <span className="py-1 px-3 border-x border-[#B1B2B2]">
                  {formData.postCount}
                </span>
                <button
                  type="button"
                  onClick={() => handleIncrement("postCount")}
                >
                  <CgMathPlus />
                </button>
              </div>
            </div>
            <div>
              <div
                className={
                  formData.reelCount > 0
                    ? "flex flex-col border border-[#384EDD] items-center justify-center w-[144px] h-[132px] bg-[#F0F2FF] rounded-[10px]"
                    : "flex flex-col items-center justify-center w-[144px] h-[132px] bg-[#F6F5F8] rounded-[10px]"
                }
              >
                <SlSocialYoutube size={"24px"} />{" "}
                <p className="text-[16px]">Reel</p>
              </div>
              <div className="flex flex-row font-semibold p-2 items-center m-3 w-[122px] h-[36px] border border-[#B1B2B2] rounded-md justify-evenly">
                <button
                  type="button"
                  onClick={() => handleDecrement("reelCount")}
                >
                  <CgMathMinus />
                </button>{" "}
                <span className="py-1 px-3 border-x border-[#B1B2B2]">
                  {formData.reelCount}
                </span>
                <button
                  type="button"
                  onClick={() => handleIncrement("reelCount")}
                >
                  <CgMathPlus />
                </button>
              </div>
            </div>
            <div>
              <div
                className={
                  formData.storyCount > 0
                    ? "flex flex-col border border-[#384EDD] items-center justify-center w-[144px] h-[132px] bg-[#F0F2FF] rounded-[10px]"
                    : "flex flex-col items-center justify-center w-[144px] h-[132px] bg-[#F6F5F8] rounded-[10px]"
                }
              >
                <HiOutlineVideoCamera size={"24px"} className="font-bold" />{" "}
                <p className="text-[16px]">Story</p>
              </div>
              <div className="flex flex-row font-semibold p-2 items-center m-3 w-[122px] h-[36px] border border-[#B1B2B2] rounded-md justify-evenly">
                <button
                  type="button"
                  onClick={() => handleDecrement("storyCount")}
                >
                  <CgMathMinus />
                </button>{" "}
                <span className="py-1 px-3 border-x border-[#B1B2B2]">
                  {formData.storyCount}
                </span>
                <button
                  type="button"
                  onClick={() => handleIncrement("storyCount")}
                >
                  <CgMathPlus />
                </button>
              </div>
            </div>
          </div>
          <div className="my-2">
            <button className="w-[180px] h-[35px] mr-6 text-[#384EDD] rounded border border-[#384EDD] px-4">
              Add Link
            </button>
            <button className="w-[180px] h-[35px] text-[#384EDD] rounded border border-[#384EDD] px-4">
              Upload
            </button>
          </div>

          <div className="flex flex-row justify-between my-20">
            <div>
              <button className="w-[180px] h-[35px] text-[#384EDD] rounded border border-[#384EDD] px-4">
                Back
              </button>
            </div>
            <div>
              <button
                type="submit"
                className="w-[180px] mr-2 h-[35px] text-white rounded bg-[#384EDD] px-4"
              >
                Save
              </button>
              <Link to={"/budget"}>
              <button
                type="submit"
                onClick={handleNext}
                className="w-[180px] h-[35px] text-white rounded bg-[#384EDD] px-4"
              >
                Next
              </button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>

   </div>
  );
};

export default AddCampaign;
