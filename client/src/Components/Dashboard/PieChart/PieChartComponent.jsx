import React, { useState, useEffect, useCallback } from 'react';
import { PieChart, Pie, Cell } from 'recharts';
import axios from 'axios';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

const PieChartComponent = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [viewsCount, setViewsCount] = useState([]);
  const [likesCount, setLikesCount] = useState([]);

  //views  
  useEffect(() => {
    async function fetchViewsData() {
      try {
        const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/video-views');
        setViewsCount(response.data);
        logViewsCount();
      } catch (error) {
        console.error(error);
      }
    }
    fetchViewsData();
  }, [setViewsCount]);

  ///likes
  useEffect(() => {
       async function fetchLikesData() {
          try {
            const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/video-likes');
            setLikesCount(response.data);
            logLikesCount();
          } catch (error) {
            console.error(error);
          }
        }
        fetchLikesData();
      }, []);

  const logViewsCount = useCallback(() => {
    console.log('viewsCount:', viewsCount);
  }, [viewsCount]);

  const logLikesCount = useCallback(() => {
    console.log('likesCount:', likesCount);
  }, [likesCount]);

  logViewsCount();
  logLikesCount();

  const data = [
    { name: 'Youtube', value: viewsCount? viewsCount : 0 + likesCount ? likesCount : 0 },
    { name: 'Instagram', value: 20000 },
    { name: 'Facebook', value: 10000 },
  ];
  const onPieEnter = (data, index) => {
    setActiveIndex(index);
  };

  const onPieLeave = () => {
    setActiveIndex(-1); // For Resetting activeIndex when mouse leaves pie chart
  };

  const getMostUsedLabel = () => {
    let maxIndex = 0;
    for (let i = 1; i < data.length; i++) {
      if (data[i].value > data[maxIndex].value) {
        maxIndex = i;
      }
    }
    return (` ${data[maxIndex].name}`);
  };

  const renderCustomLabel = ({ cx, cy }) => {
    if (activeIndex === -1) {
      // Render default label or nothing if no segment is hovered
      const mostUsedName = getMostUsedLabel();
      return (
        <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#4b5563">
        <tspan x={cx} dominantBaseline="middle" fontSize="12" dy="-0.8em">Most Used</tspan>
        <tspan x={cx} dy="1.2em">{mostUsedName}</tspan>
      </text>
      );
    }

    const { name, value } = data[activeIndex];

    return (
      <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="#333">
        {`${name} (${value})`}
      </text>
    );
  };

  return (
    <div className="bg-white mt-8 w-[284px] h-[475px] rounded-xl p-5">
      <h1 className="text-gray-900 font-body font-bold text-2xl mb-5">Audience Insights</h1>
      <PieChart width={300} height={400} onMouseLeave={onPieLeave} style={{left: "-85px",
              top: "-88px"}}>
        <Pie
          data={data}
          cx={200}
          cy={200}
          innerRadius={60}
          outerRadius={90}
          fill="#8884d8"
          paddingAngle={4}
          dataKey="value"
          labelLine={false}
          label={renderCustomLabel}
          onMouseEnter={onPieEnter}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
   
      </PieChart>
      <div className="flex flex-wrap ml-4 font-body" style={{ marginTop: '-150px' }}>
        {data.map((entry, index) => (
          <div key={`legend-${index}`} className="flex items-center mb-2 mr-4">
            <span className="mr-2 text-sm" style={{ color: COLORS[index % COLORS.length] }}>●</span>
            <span className="text-gray-900 font-sans">{entry.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;