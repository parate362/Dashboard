import React, { useContext, useState } from "react";
import Select, { components } from "react-select";
import { PiImageBold } from "react-icons/pi";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { MdChevronRight } from "react-icons/md";
import { CgMathMinus, CgMathPlus } from "react-icons/cg";
import { SlSocialYoutube } from "react-icons/sl";
import { RiErrorWarningLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Mycontext } from "../../../utils/Context";
import { IoIosCheckmark } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";
import fileImg from "../../../Assets/fileImg.svg";

const AddCampaign = () => {
  const contextState = useContext(Mycontext);
  const expanded = contextState.expanded;
  const formData = contextState.campData;
  const setFormData = contextState.setCampData;
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [descriptionCount, setDescriptionCount] = useState(0);

  const industryoptions = [
    { value: "Fashion", label: "Fashion" },
    { value: "Lifestyle", label: "Lifestyle" },
    { value: "Tourism", label: "Tourism" },
  ];

  const platformoptions = [
    { value: "Instagram", label: "Instagram" },
    { value: "Snapchat", label: "Snapchat" },
    { value: "YouTube", label: "YouTube" },
  ];

  const locationoptions = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Pune", label: "Pune" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (name === "description") {
      setDescriptionCount(value.length);
    }
  };

  const handleMultiSelectChange = (selectedOptions, actionMeta) => {
    setFormData({
      ...formData,
      [actionMeta.name]: selectedOptions,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
    }
  };

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

  const addLink = () => {
    setFormData({ ...formData, isAddLink: !formData.isAddLink });
  };

  const handleUpload = (e) => {
    setFormData({ ...formData, uploadData: e.target.files[0]?.name });
  };

  const handleRemoveUpload = () => {
    setFormData({ ...formData, uploadData: "" });
  };

  const validate = () => {
    const errors = {};
    if (!formData.campaignName)
      errors.campaignName = "Campaign Name is required";
    if (!formData.description) errors.description = "Description is required";
    if (formData.description.length > 500)
      errors.description = "Description cannot exceed 500 words";
    if (
      !formData.selectedOptionsplatform ||
      formData.selectedOptionsplatform.length === 0
    )
      errors.platform = "Platform is required";
    if (!formData.gender) errors.gender = "Gender is required";
    if (
      !formData.selectedOptionsindustry ||
      formData.selectedOptionsindustry.length === 0
    )
      errors.industry = "Industry is required";
    if (
      !formData.selectedOptionslocation ||
      formData.selectedOptionslocation.length === 0
    )
      errors.location = "Location is required";
    if (!formData.startDate) errors.startDate = "Start Date is required";
    if (!formData.endDate) errors.endDate = "End Date is required";
    if (new Date(formData.endDate) < new Date(formData.startDate))
      errors.endDate = "End Date cannot be before Start Date";
    if (!formData.worktype) errors.workType = "Work Type is required";

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log("Form submitted", formData);
      navigate("/budget");
    }
  };
  const removeSelectedOption = (optionToRemove) => {
    const updatedOptions = formData.selectedOptionsplatform.filter(
      (option) => option.value !== optionToRemove.value
    );
    setFormData({ ...formData, selectedOptionsplatform: updatedOptions });
  };

  const MultiValue = () => null;
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <div
      className={`relative max-h-[1066px] mx-6 bg-white mt-[112px] ${
        !expanded
          ? "left-[90px] w-[calc(100%-150px)]"
          : "left-[320px] w-[calc(100%-390px)]"
      } rounded-xl drop-shadow-md`}
    >
      <div className="bg-white top-28 my-4 left-[311px] w-full rounded-xl">
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
          className={`text-[16px] font-semibold ${
            currentPath === '/AddCampaign' ? 'text-[#2463eb]' : ''
          } gap-x-2`}
        >
          Add Campaigns
        </Link>
      </div>
    </div>
        <div className="p-6 my-2">
          <form onSubmit={handleSubmit}>
            <div className="my-2">
              <label className="text-[18px]">
                Campaign Name <sup className="text-[#2463eb]">*</sup>
              </label>
              <input
                className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5 my-2 focus:outline-none focus:border-blue-600 ${
                  errors.campaignName ? "border-red-500" : ""
                }`}
                type="text"
                name="campaignName"
                id="name"
                value={formData.campaignName}
                onChange={handleChange}
                placeholder="John Doe"
              />
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
                className={`border-[0.7px] border-[#363939] rounded-lg w-full px-[19px] py-1 gap-2.5 focus:outline-none focus:border-[#384edd] ${
                  errors.description ? "border-red-500" : ""
                }`}
                name="description"
                id="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
              />
              <div
                className={`text-gray-500 text-sm flex ${
                  errors.description ? "justify-between" : "justify-end"
                }  mr-2`}
              >
                {errors.description && (
                  <p className="text-red-500 text-sm flex flex-row gap-1">
                    <span>
                      <RiErrorWarningLine className="m-1" />
                    </span>
                    {errors.description}
                  </p>
                )}
                <div className="">{descriptionCount}/500</div>
              </div>
            </div>
            <div className="my-2">
              <label className="text-base">
                Select Platform <sup className="text-[#2463eb]">*</sup>
              </label>
              <Select
                className={`border-[#363939] rounded-lg w-full my-2 focus:outline-none focus:border-[#384edd] ${
                  errors.platform ? "border-red-500" : ""
                }`}
                isMulti
                name="selectedOptionsplatform"
                options={platformoptions}
                placeholder="Select Platforms"
                value={formData.selectedOptionsplatform}
                onChange={handleMultiSelectChange}
                components={{ MultiValue }}
                styles={{
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    color: "black",
                    backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    display: "none",
                  }),
                }}
              />
              <div className="mt-2 flex flex-wrap">
                {formData.selectedOptionsplatform.map((option) => (
                  <div
                    key={option.value}
                    className="inline-flex items-center px-2 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                  >
                    <span className="mr-2">{option.label}</span>
                    <button
                      type="button"
                      className="text-white"
                      onClick={() => removeSelectedOption(option)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {errors.platform && (
                <p className="text-red-500 text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.platform}
                </p>
              )}
            </div>
            <div className="my-2">
              <label className="text-base">
                Select Gender <sup className="text-[#2463eb]">*</sup>
              </label>
              <div className="flex">
                {["All", "Male", "Female", "Other"].map((gender) => (
                  <label
                    key={gender}
                    className={`border w-1/2 mr-2 px-2 py-1 rounded-md ${
                      errors.gender ? "border-red-500" : ""
                    } flex items-center`}
                  >
                    <input
                      type="radio"
                      name="gender"
                      value={gender}
                      checked={formData.gender === gender}
                      onChange={handleChange}
                      className="px-8"
                    />
                    <span className="ml-2">{gender}</span>
                  </label>
                ))}
              </div>

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
              <label className="text-base">
                Select Industry <sup className="text-[#2463eb]">*</sup>
              </label>
              <Select
                className={`border-[#363939] rounded-lg w-full gap-2.5 my-2 focus:outline-none focus:border-[#384edd] ${
                  errors.industry ? "border-red-500" : ""
                }`}
                isMulti
                name="selectedOptionsindustry"
                options={industryoptions}
                placeholder="Select Industry"
                value={formData.selectedOptionsindustry}
                onChange={handleMultiSelectChange}
                components={{ MultiValue }}
                styles={{
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    backgroundColor: "#384EDD",
                    borderRadius: "50px",
                  }),
                  multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    textAlign: "center",
                  }),
                }}
              />
              <div className="mt-2 flex flex-wrap">
                {formData.selectedOptionsindustry.map((option) => (
                  <div
                    key={option.value}
                    className="inline-flex items-center px-2 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                  >
                    <span className="mr-2">{option.label}</span>
                    <button
                      type="button"
                      className="text-white"
                      onClick={() => removeSelectedOption(option)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
              {errors.industry && (
                <p className="text-red-500 text-sm flex flex-row gap-1">
                  <span>
                    <RiErrorWarningLine className="m-1" />
                  </span>
                  {errors.industry}
                </p>
              )}
            </div>
            <div className="my-2">
              <label className="text-base">
                Location <sup className="text-[#2463eb]">*</sup>
              </label>
              <Select
                className={`border-[#363939] rounded-lg w-full gap-2.5 my-2 focus:outline-none focus:border-[#384edd] ${
                  errors.location ? "border-red-500" : ""
                }`}
                isMulti
                name="selectedOptionslocation"
                options={locationoptions}
                placeholder="Select Location"
                value={formData.selectedOptionslocation}
                onChange={handleMultiSelectChange}
                components={{ MultiValue }}
                styles={{
                  option: (baseStyles, state) => ({
                    ...baseStyles,
                    backgroundColor: state.isFocused ? "#DBE0FF" : "white",
                  }),
                  multiValue: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    backgroundColor: "#384EDD",
                    borderRadius: "50px",
                  }),
                  multiValueLabel: (baseStyles) => ({
                    ...baseStyles,
                    color: "white",
                    textAlign: "center",
                  }),
                }}
              />
              <div className="mt-2 flex flex-wrap">
                {formData.selectedOptionslocation.map((option) => (
                  <div
                    key={option.value}
                    className="inline-flex items-center px-2 py-1 mr-2 mb-2 bg-[#384EDD] text-sm text-white rounded-full"
                  >
                    <span className="mr-2">{option.label}</span>
                    <button
                      type="button"
                      className="text-white"
                      onClick={() => removeSelectedOption(option)}
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
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
                  className={`shadow appearance-none w-full px-3 py-2 border rounded-md text-[#B1B2B2] focus:outline-none focus:shadow-outline ${
                    errors.startDate ? "border-red-500" : ""
                  }`}
                />
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
                  className={`shadow appearance-none w-full px-3 py-2 border rounded-md text-[#B1B2B2] focus:outline-none focus:shadow-outline ${
                    errors.endDate ? "border-red-500" : ""
                  }`}
                />
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
                        name="worktype"
                        value={workType}
                        checked={formData.worktype === workType}
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
                  <PiImageBold size={"24px"} />
                  <p className="text-[16px]">Post</p>
                </div>
                <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleDecrement("postCount")}
                  >
                    <CgMathMinus />
                  </button>
                  <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                    {formData.postCount}
                  </span>
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
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
                  <SlSocialYoutube size={"24px"} />
                  <p className="text-[16px]">Reel</p>
                </div>
                <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleDecrement("reelCount")}
                  >
                    <CgMathMinus />
                  </button>
                  <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                    {formData.reelCount}
                  </span>
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
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
                  <HiOutlineVideoCamera size={"24px"} className="font-bold" />
                  <p className="text-[16px]">Story</p>
                </div>
                <div className="flex flex-row font-semibold w-[122px] ml-3 mt-3 border border-[#B1B2B2] rounded-md">
                  <button
                    className="h-[36px] w-[40px] flex items-center justify-center"
                    type="button"
                    onClick={() => handleDecrement("storyCount")}
                  >
                    <CgMathMinus />
                  </button>
                  <span className="w-[39px] h-[36px] border-x border-[#B1B2B2] flex items-center justify-center">
                    {formData.storyCount}
                  </span>
                  <button
                    type="button"
                    className="h-[36px] w-[40px]  flex items-center justify-center"
                    onClick={() => handleIncrement("storyCount")}
                  >
                    <CgMathPlus />
                  </button>
                </div>
              </div>
            </div>
            <input
              type="text"
              className={`${
                formData.isAddLink ? "block" : "hidden"
              } w-[400px] h-11 px-6 border text-sm my-5 border-[#363939] rounded-lg`}
              name=""
              id=""
              placeholder="Add link"
            />
            <div className="flex gap-7">
              <div
                className={`${
                  formData.uploadData &&
                  "relative flex items-center px-4 w-[400px] h-11 bg-[#F9F9F9] border border-[#363939] rounded-lg"
                }`}
              >
                <div className="flex">
                  <img
                    src={fileImg}
                    className={formData.uploadData ? "block mx-1" : "hidden"}
                    alt=""
                  />
                  <span className="text-sm cursor-default">
                    {formData.uploadData}
                  </span>
                </div>
                <IoIosCheckmark
                  className={`${
                    formData.uploadData
                      ? "absolute right-12 text-2xl bg-green-600 rounded-full text-white"
                      : "hidden"
                  }`}
                />
                <IoCloseSharp
                  className={`${
                    formData.uploadData
                      ? "absolute right-3 cursor-pointer"
                      : "hidden"
                  }`}
                  onClick={handleRemoveUpload}
                />
              </div>
            </div>
            <div className="my-2 flex flex-row gap-9">
              <div className="flex items-center justify-center border rounded-lg border-[#384EDD]">
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
            <div className="flex flex-row justify-between my-20">
              <div>
                <Link to={"/manageCampaign"}>
                  <button className="w-[180px] h-[35px] text-[#384EDD] rounded border border-[#384EDD] px-4">
                    Back
                  </button>
                </Link>
              </div>
              <div>
                <button className="w-[180px] mr-2 h-[35px] text-white rounded bg-[#384EDD] px-4">
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
