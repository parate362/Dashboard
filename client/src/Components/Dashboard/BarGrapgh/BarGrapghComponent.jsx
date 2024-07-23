import React, { useState, useEffect } from 'react';
import { HiOutlineDocumentDownload } from "react-icons/hi";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import axios from 'axios';

const BarGraphComponent = ({ expanded }) => {
  const [selectedOption, setSelectedOption] = useState('Jan'); // Default to January
  const [selectedType, setSelectedType] = useState('months'); // Default to months
  const [selectedYear, setSelectedYear] = useState('2024');
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/get-performance', {
          params: { type: selectedType, year: selectedYear, value: selectedType === 'months' ? selectedOption : selectedMonth },
        });
        setData(response.data);
      } catch (error) {
        setError('Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedOption, selectedType, selectedYear, selectedMonth]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTypeChange = (event) => {
    setSelectedType(event.target.value);
    setSelectedOption(event.target.value === 'weeks' ? 'week1' : 'Jan');
    setSelectedMonth('Jan'); // Reset month when type changes
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
    setSelectedType('months'); // Default to months when a year is selected
    setSelectedOption('Jan'); // Default to January
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
    setSelectedOption('week1'); // Default to Week 1 when month changes
  };

  const width = expanded ? 650 : 850;
  const barSize = selectedType === 'weeks' ? 50 : 30;

  return (
    <div className="min-h-[296px] bg-white rounded-lg mt-1">
      <div className="bg-card p-2 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold pl-4 text-card-foreground">Performance Measure</h2>
          <div className="flex mr-8">
            <select
              className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border border-gray-500"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="2022">2022</option>
              <option value="2023">2023</option>
              <option value="2024">2024</option>
            </select>
            <select
              className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border border-gray-500"
              value={selectedType}
              onChange={handleTypeChange}
            >
              <option value="weeks">Weeks</option>
              <option value="year">Months</option> 
            </select>
            {selectedType === 'weeks' && (
              <>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border border-gray-500"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                 <option value="Jan">Jan</option>
                  <option value="Feb">February</option>
                  <option value="Mar">March</option>
                  <option value="Apr">April</option>
                  <option value="May">May</option>
                  <option value="Jun">June</option>
                  <option value="Jul">July</option>
                  <option value="Aug">August</option>
                  <option value="Sep">September</option>
                  <option value="Oct">October</option>
                  <option value="Nov">November</option>
                  <option value="Dec">December</option>
                </select>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-border border-gray-500"
                  value={selectedOption}
                  onChange={handleOptionChange}
                >
                  <option value="week1">Week 1</option>
                  <option value="week2">Week 2</option>
                  <option value="week3">Week 3</option>
                  <option value="week4">Week 4</option>
                </select>
              
              </>
            )}
              <button className='bg-blue-600 text-white p-2 font-semibold rounded-lg border border-gray-500 hover:bg-primary/80 flex items-center'>
      <HiOutlineDocumentDownload className="mr-2 size-6 " />
      Export PDF
    </button>
          </div>
        </div>
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : error ? (
          <div className="text-center">{error}</div>
        ) : (
          <div className="flex justify-center">
            <div>
            <BarChart 
            width={width} 
            height={300} 
            data={data}   
            margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,}}
            >
              <XAxis dataKey={selectedType === 'year' ? 'month' : 'day'} 
    tickFormatter={(tick) => selectedType === 'year' ? tick.slice(0, 3) : tick} />
              <YAxis />
              <Tooltip />
              <Bar dataKey="likes" fill="#8884d8" barSize={barSize} activeBar={{  stroke:  "#8884d8", strokeWidth: 2}} />
              <Bar dataKey="views" fill="#384EDD" barSize={barSize} activeBar={{  stroke:  "#384EDD", strokeWidth: 2}} />
            </BarChart>

            </div>
            <div class="mt-8 mr-4 text-left  h-48 md:mt-0 md:ml-6 flex-col items-end justify-center">
        <div class="font-semibold text-xs text-green-500  mb-2" >Increase</div>
        <div class="font-semibold text-sm mb-2 text-green-500" >20% <FaArrowUp className='inline-block ml-1 mb-1' /></div>   
    <div class="font-semibold text-xs text-red-500  mb-2" >Decrease</div>
    <div class="font-semibold text-sm mb-2 text-red-500" >20% <FaArrowDown className='inline-block ml-1 mb-1' /></div>
    <div class="text-muted-foreground text-xs text-gray-500 mb-2">Current week</div>
    <div class="text-foreground text-sm font-bold mb-2" id="profitAmount">200,000</div>
    <div class="text-muted-foreground text-xs text-gray-500 mb-2">Previous week</div>
    <div class="text-foreground text-sm font-bold">200,000</div>  
    </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarGraphComponent;
