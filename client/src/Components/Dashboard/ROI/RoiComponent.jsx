import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AreaChart, Area, XAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { HiOutlineDocumentDownload } from 'react-icons/hi';

const RoiComponent = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const [selectedMonth, setSelectedMonth] = useState('Jan');
  const [selectedWeek, setSelectedWeek] = useState('Week 1');
  const [selectedPeriod, setSelectedPeriod] = useState('Years');
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [metrics, setMetrics] = useState({});

  const years = Array.from({ length: 10 }, (_, i) => 2020 + i);
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];
  const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  
  const monthOrder = {
    'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
    'Jul': 6, 'Aug': 7, 'Sept': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/calculate-roi', {
          params: {
            year: selectedYear,
            month: selectedPeriod !== 'Years' ? selectedMonth : undefined,
            week: selectedPeriod === 'Weeks' ? selectedWeek : undefined,
          },
        });
  
        const processedData = processChartData(response.data.data, selectedPeriod);
        setDataToDisplay(processedData);
        setMetrics(response.data.metrics);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedYear, selectedMonth, selectedWeek, selectedPeriod]);

  const processChartData = (data, period) => {
    if (period === 'Years') {
      const uniqueMonths = new Map();
      const filledData = months.map(month => ({
        month,
        views: 0,
        likes: 0,
        amt: 0
      }));

      data.forEach(item => {
        uniqueMonths.set(item.month, item);
      });

      uniqueMonths.forEach((value, key) => {
        const index = monthOrder[key];
        filledData[index] = value;
      });

      return filledData;
    }
    return data;
  };

  const handlePeriodChange = (event) => {
    setSelectedPeriod(event.target.value);
    setSelectedMonth(months[0]);
    setSelectedWeek(weeks[0]);
  };

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleWeekChange = (event) => {
    setSelectedWeek(event.target.value);
  };

  return (
    <div className="bg-white mt-6 rounded-xl max-h-[328px]">
      <div className="bg-card max-h-[328px] p-4 justify-between rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-10">
          <h2 className="text-lg font-bold pl-4 text-card-foreground">
            ROI Report
          </h2>
          <div className="flex mr-8">
            <select
              className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
              value={selectedPeriod}
              onChange={handlePeriodChange}
            >
              <option value="Years">Years</option>
              {/* <option value="Months">Months</option> */}
              <option value="Weeks">Weeks</option>
            </select>
            {selectedPeriod === 'Years' && (
              <select
                className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
                value={selectedYear}
                onChange={handleYearChange}
              >
                {years.map((year, index) => (
                  <option key={index} value={year}>{year}</option>
                ))}
              </select>
            )}
            {selectedPeriod === 'Months' && (
              <>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
              </>
            )}
            {selectedPeriod === 'Weeks' && (
              <>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
                  value={selectedYear}
                  onChange={handleYearChange}
                >
                  {years.map((year, index) => (
                    <option key={index} value={year}>{year}</option>
                  ))}
                </select>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
                  value={selectedMonth}
                  onChange={handleMonthChange}
                >
                  {months.map((month, index) => (
                    <option key={index} value={month}>{month}</option>
                  ))}
                </select>
                <select
                  className="bg-secondary mr-4 text-secondary-foreground p-2 rounded-lg border border-gray-500"
                  value={selectedWeek}
                  onChange={handleWeekChange}
                >
                  {weeks.map((week, index) => (
                    <option key={index} value={week}>{week}</option>
                  ))}
                </select>
              </>
            )}
            <button className="bg-blue-600 text-white p-2 font-semibold rounded-lg border border-gray-500 hover:bg-primary/80 flex items-center">
              <HiOutlineDocumentDownload className="mr-2 size-6" />
              Export PDF
            </button>
          </div>
        </div>
        <div style={{ width: '100%', height: 229 }}>
          <ResponsiveContainer>
            <AreaChart
              data={dataToDisplay}
              margin={{
                top: 10,
                right: 20,
                left: 20,
                bottom: 0,
              }}
            >
              <XAxis dataKey={selectedPeriod === 'Years' ? 'month' : 'day'} />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#8884d8"
                fill="#4F46E5"
                opacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="likes"
                stroke="#82ca9d"
                fill="#1FCACF"
                opacity={0.2}
              />
              <Area
                type="monotone"
                dataKey="amt"
                stroke="#FFBB28"
                fill="#FFBB28"
                opacity={0.2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default RoiComponent;
