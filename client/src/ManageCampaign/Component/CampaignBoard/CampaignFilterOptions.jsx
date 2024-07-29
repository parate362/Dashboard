import { useState } from "react";
import Select from "react-select";

const CampaignFilterOptions = ({ isModalVisible, setIsModalVisible }) => {
  const [filterData, setFilterData] = useState({
    startDate: "",
    endDate: "",
    location: [],
    platform: [],
    content: [],
  });

  const locationoptions = [
    { value: "New Delhi", label: "New Delhi" },
    { value: "Nagpur", label: "Nagpur" },
    { value: "Pune", label: "Pune" },
  ];

  const platformoptions = [
    { value: "Instagram", label: "Instagram" },
    { value: "Snapchat", label: "Snapchat" },
    { value: "YouTube", label: "YouTube" },
  ];

  const contentbuttons = ["story", "reel", "post"];

  const handleMultiSelectChangelocation = (location) => {
    setFilterData({
      ...filterData,
      location,
    });
  };

  const handleMultiSelectChangeplatform = (platform) => {
    setFilterData({
      ...filterData,
      platform,
    });
  };

  const handleContentClick = (content) => {
    const newContent = filterData.content.includes(content)
      ? filterData.content.filter((c) => c !== content)
      : [...filterData.content, content];
      
    setFilterData({
      ...filterData,
      content: newContent,
    });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFilterData({ ...filterData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(filterData);
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const MultiValue = () => null;

  return (
    <div className="w-[320px] h-auto bg-white px-4">
      <div className="w-[272px] h-[23px] text-center mx-3 my-2 mb-4 border-b border-[#DFDFDF]">
        Filter
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <h5 className="font-semibold text-sm text-[#344054]">Date</h5>
          <div className="flex flex-row justify-between w-full">
            <div className="mb-2">
              <label className="text-[10px]">Start Date</label>
              <input
                className="w-[126px] mt-2 border-[0.7px] border-[#363939] p-1 rounded-lg"
                placeholder="DD/MM/YYYY"
                type="date"
                name="startDate"
                value={filterData.startDate}
                onChange={handleInput}
              />
            </div>
            <div className="mb-2">
              <label className="text-[10px]">End Date</label>
              <input
                className="w-[126px] mt-2 border-[0.7px] border-[#363939] p-1 rounded-lg"
                placeholder="DD/MM/YYYY"
                type="date"
                name="endDate"
                value={filterData.endDate}
                onChange={handleInput}
              />
            </div>
          </div>
          <div className="mb-2">
            <label className="font-semibold text-sm text-[#344054]">Location</label>
            <Select
              className="rounded-lg mt-2 border-[#363939] focus:outline-none focus:border-[#384edd]"
              isMulti
              name="location"
              options={locationoptions}
              placeholder="Location"
              value={filterData.location}
              onChange={handleMultiSelectChangelocation}
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
              {filterData.location.map((option) => (
                <div
                  key={option.value}
                  className="inline-flex items-center px-2 py-1 mr-2 bg-[#384EDD] text-xs text-white rounded-full"
                >
                  <span className="mr-2">{option.label}</span>
                  <button
                    type="button"
                    className="text-white"
                    onClick={() => handleMultiSelectChangelocation(filterData.location.filter((loc) => loc.value !== option.value))}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <label className="font-semibold text-sm text-[#344054]">Platform</label>
            <Select
              className="rounded-lg mt-2 border-[#363939] focus:outline-none focus:border-[#384edd]"
              isMulti
              name="platform"
              options={platformoptions}
              placeholder="Platform"
              value={filterData.platform}
              onChange={handleMultiSelectChangeplatform}
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
              {filterData.platform.map((option) => (
                <div
                  key={option.value}
                  className="inline-flex items-center px-2 py-1 mr-2 bg-[#384EDD] text-xs text-white rounded-full"
                >
                  <span className="mr-2">{option.label}</span>
                  <button
                    type="button"
                    className="text-white"
                    onClick={() => handleMultiSelectChangeplatform(filterData.platform.filter((plat) => plat.value !== option.value))}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-2">
            <label className="font-semibold text-sm text-[#344054]">Content</label>
            <div className="flex">
              {contentbuttons.map((content, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => handleContentClick(content)}
                  className={`w-[70px] h-[36px] rounded-full m-2 px-4 py-1 text-xs font-semibold border border-[#384EDD] ${filterData.content.includes(content) ? 'bg-[#384EDD] text-white' : 'bg-white text-[#384EDD]'} focus:outline-none`}
                >
                  {content.charAt(0).toUpperCase() + content.slice(1)}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <button
              type="button"
              onClick={toggleModal}
              className="w-[118px] rounded-[4px] border text-[#384EDD] mb-4 border-[#384EDD]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-[118px] rounded-[4px] px-4 bg-[#384EDD] mb-4 text-white"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CampaignFilterOptions;
