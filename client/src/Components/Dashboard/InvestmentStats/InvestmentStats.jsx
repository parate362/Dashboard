import React, { useState, useEffect } from 'react';
import axios from 'axios';

const InvestmentStats = () => {
    const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
    const [selectedMonth, setSelectedMonth] = useState('Jan');
    const [selectedWeek, setSelectedWeek] = useState('Week 1');
    const [selectedPeriod, setSelectedPeriod] = useState('Years');
    const [dataToDisplay, setDataToDisplay] = useState([]);
    const [metrics, setMetrics] = useState({ totalTarget: 0, currentTarget: 0, totalReturns: 0, totalProfitOrLoss: 0 });
  
  
    const years = Array.from({ length: 3 }, (_, i) => 2022 + i);
    const months = [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
      'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
    ];
    const weeks = ['Week 1', 'Week 2', 'Week 3', 'Week 4'];
  
    useEffect(() => {
      fetchData();
    }, [selectedYear, selectedMonth, selectedWeek, selectedPeriod]);
  
    const fetchData = async () => {
      try {
        const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/calculate-roi', {
          params: {
            year: selectedYear,
            month: selectedPeriod !== 'Years' ? selectedMonth : undefined,
            week: selectedPeriod === 'Weeks' ? selectedWeek : undefined,
          },
        });
  
        setDataToDisplay(response.data.data);
        setMetrics({
          totalTarget: response.data.totalTarget,
          currentTarget: response.data.currentTarget,
          totalReturns: response.data.totalReturns,
          totalProfitOrLoss: response.data.totalProfitOrLoss,
        });
      } catch (error) {
        console.error('Error fetching data:', error);
      }
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
  
    // const formatProfitOrLoss = (value) => {
    //   return value >= 0 ? (
    //     <span style={{ color: 'green' }}>{value.toFixed(2)}%</span>
    //   ) : (
    //     <span style={{ color: 'red' }}>{value.toFixed(2)}%</span>
    //   );
    // };
    const formatProfitOrLoss = (value) => {
      if (value == null) {
        return <span style={{ color: 'gray' }}>N/A</span>;
      }
      
      return value >= 0 ? (
        <span style={{ color: 'green' }}>{value.toFixed(2)}%</span>
      ) : (
        <span style={{ color: 'red' }}>{value.toFixed(2)}%</span>
      );
    };
  
    const uniqueData = (data, key) => {
      const seen = new Set();
      return data.filter(item => {
        const k = item[key];
        return seen.has(k) ? false : seen.add(k);
      });
    };
  
    const formattedData = selectedPeriod === 'Years' ? uniqueData(dataToDisplay, 'month') : dataToDisplay;
    return (
    <div className="flex items-center rounded-xl justify-around bg-white p-8 mt-6 min-h-[100px]">
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Total Target</p>
        <p className="text-lg font-bold">{metrics.totalTarget}</p>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Current Target</p>
        <p className="text-lg font-bold">{metrics.currentTarget}</p>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Total Returns</p>
        <p className="text-lg font-bold text-green-500">{metrics.totalReturns}</p>
      </div>
      <div className="text-center">
        <p className="text-sm mb-2 text-muted-foreground">Total Profit/ Loss</p>
        <p className="text-lg font-bold text-red-500">{formatProfitOrLoss(metrics.totalProfitOrLoss)}%</p>
      </div>
    </div>
  );
};

export default InvestmentStats;
