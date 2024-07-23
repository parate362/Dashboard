import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PieChartComponent from '../PieChart/PieChartComponent';

function PieChart() {
  const [url, setUrl] = useState('');
  const [videoData, setVideoData] = useState(null);
  const [error, setError] = useState(null);
  const [viewsCount, setViewsCount] = useState([]);
  const [likesCount, setLikesCount] = useState([]);

  //fetchViewsCount
  useEffect(() => {
    async function fetchViewsCount() {
      try {
        const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/video-views');
        if (Array.isArray(response.data)) {
          setViewsCount(response.data);
        } else {
          console.error('Response data is not an array');
        }
      } catch (error) {
        console.error(error);
      }
    }
    fetchViewsCount();
  }, [setViewsCount]);

//fetchLikesCount
  useEffect(() => {
    async function fetchLikesCount() {
      try {
        const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/video-likes');
        setLikesCount(response.data);
        console.log('likesCount:', likesCount);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLikesCount();
  }, []);

  useEffect(() => {
      console.log('viewsCount:', viewsCount); // log the updated state
    }, [viewsCount]);


  const fetchData = async () => {
    try {
      const response = await axios.get('https://dashboard-server-rosy.vercel.app/api/video-data', {
        params: {
          url: url,
        },
      });
      setVideoData(response.data);
      setError(null);
    } catch (error) {
      setError(error.response ? error.response.data.message : 'Error fetching video data');
      setVideoData(null);
    }
  };

  return (
    <div>
      {viewsCount && <PieChartComponent viewsCount={viewsCount} />}
    </div>
  );
}

export default PieChart;
