// sampleData.js
const mongoose = require('mongoose');
const Brand = require('./src/models/Brand');
const Campaign = require('./src/models/Campaign');
const Influencer = require('./src/models/Influencer');
const RoiData = require('./src/models/RoiData'); // Require RoiData model

mongoose.connect('mongodb://127.0.0.1:27017/keek', { useNewUrlParser: true, useUnifiedTopology: true });

const addSampleData = async () => {
  try {
    // Sample data for influencers
    const influencers = [
      new Influencer({
        name: 'Influencer A',
        posts: [
          { platform: 'Instagram', likes: 100, views: 200, date: new Date('2024-01-01') },
          { platform: 'Facebook', likes: 150, views: 300, date: new Date('2024-01-05') },
          { platform: 'YouTube', likes: 200, views: 400, date: new Date('2024-01-10') },
          { platform: 'Instagram', likes: 250, views: 500, date: new Date('2024-01-15') },
          { platform: 'Facebook', likes: 300, views: 600, date: new Date('2024-01-20') },
          { platform: 'YouTube', likes: 350, views: 700, date: new Date('2024-01-25') },
          { platform: 'Instagram', likes: 400, views: 800, date: new Date('2024-01-30') },
        ],
      }),
      new Influencer({
        name: 'Influencer B',
        posts: [
          { platform: 'Instagram', likes: 200, views: 400, date: new Date('2024-02-01') },
          { platform: 'YouTube', likes: 250, views: 500, date: new Date('2024-02-10') },
          { platform: 'Facebook', likes: 300, views: 600, date: new Date('2024-02-15') },
          { platform: 'Instagram', likes: 350, views: 700, date: new Date('2024-02-20') },
          { platform: 'YouTube', likes: 400, views: 800, date: new Date('2024-02-25') },
        ],
      }),
      new Influencer({
        name: 'Influencer C',
        posts: [
          { platform: 'Facebook', likes: 300, views: 600, date: new Date('2024-03-01') },
          { platform: 'Instagram', likes: 350, views: 700, date: new Date('2024-03-15') },
          { platform: 'YouTube', likes: 400, views: 800, date: new Date('2024-03-20') },
          { platform: 'Facebook', likes: 450, views: 900, date: new Date('2024-03-25') },
          { platform: 'Instagram', likes: 500, views: 1000, date: new Date('2024-03-30') },
        ],
      }),
      new Influencer({
        name: 'Influencer D',
        posts: [
          { platform: 'Instagram', likes: 150, views: 300, date: new Date('2024-04-01') },
          { platform: 'Facebook', likes: 200, views: 400, date: new Date('2024-04-05') },
          { platform: 'YouTube', likes: 250, views: 500, date: new Date('2024-04-10') },
          { platform: 'Instagram', likes: 300, views: 600, date: new Date('2024-04-15') },
          { platform: 'Facebook', likes: 350, views: 700, date: new Date('2024-04-20') },
          { platform: 'YouTube', likes: 400, views: 800, date: new Date('2024-04-25') },
          { platform: 'Instagram', likes: 450, views: 900, date: new Date('2024-04-30') },
        ],
      }),
    ];

    // Save influencers
    for (const influencer of influencers) {
      await influencer.save();
    }

    // Sample data for campaigns
    const campaigns = [
      new Campaign({
        name: 'Campaign 1',
        target: 1000,
        influencerId: influencers[0]._id,
        startDate: new Date('2024-01-01'),
        endDate: new Date('2024-01-31'),
      }),
      new Campaign({
        name: 'Campaign 2',
        target: 2000,
        influencerId: influencers[1]._id,
        startDate: new Date('2024-02-01'),
        endDate: new Date('2024-02-28'),
      }),
      new Campaign({
        name: 'Campaign 3',
        target: 1500,
        influencerId: influencers[2]._id,
        startDate: new Date('2024-03-01'),
        endDate: new Date('2024-03-31'),
      }),
      new Campaign({
        name: 'Campaign 4',
        target: 2500,
        influencerId: influencers[3]._id,
        startDate: new Date('2024-04-01'),
        endDate: new Date('2024-04-30'),
      }),
      new Campaign({
        name: 'Campaign 5',
        target: 3000,
        influencerId: influencers[0]._id,
        startDate: new Date('2024-05-01'),
        endDate: new Date('2024-05-31'),
      }),
    ];

    // Save campaigns
    for (const campaign of campaigns) {
      await campaign.save();
    }
console.log(campaigns[0]);
    // Sample data for RoiData
    const roiDataEntries = [
      new RoiData({
        campaign: campaigns[0]._id,
        totalLikes: 1750,
        totalViews: 3500,
        roi: 2.5,
        returns: 150,
        losses: 0,
        startDate: campaigns[0].startDate,
        endDate: campaigns[0].endDate,
      }),
      new RoiData({
        campaign: campaigns[1]._id,
        totalLikes: 3000,
        totalViews: 5000,
        roi: 2.5,
        returns: 100,
        losses: 0,
        startDate: campaigns[1].startDate,
        endDate: campaigns[1].endDate,
      }),
      new RoiData({
        campaign: campaigns[2]._id,
        totalLikes: 4250,
        totalViews: 8500,
        roi: 2.83,
        returns: 250,
        losses: 0,
        startDate: campaigns[2].startDate,
        endDate: campaigns[2].endDate,
      }),
      new RoiData({
        campaign: campaigns[3]._id,
        totalLikes: 5250,
        totalViews: 10500,
        roi: 4.2,
        returns: 300,
        losses: 0,
        startDate: campaigns[3].startDate,
        endDate: campaigns[3].endDate,
      }),
      new RoiData({
        campaign: campaigns[4]._id,
        totalLikes: 3750,
        totalViews: 7500,
        roi: 2.5,
        returns: 200,
        losses: 0,
        startDate: campaigns[4].startDate,
        endDate: campaigns[4].endDate,
      }),
    ];

    // Save RoiData entries
    for (const roiData of roiDataEntries) {
      await roiData.save();
    }

    // Sample data for brands
    const brands = [
      new Brand({
        name: 'Brand A',
        campaigns: [campaigns[0]._id, campaigns[1]._id],
      }),
      new Brand({
        name: 'Brand B',
        campaigns: [campaigns[2]._id, campaigns[3]._id],
      }),
      new Brand({
        name: 'Brand C',
        campaigns: [campaigns[4]._id],
      }),
    ];

    // Save brands
    for (const brand of brands) {
      await brand.save();
    }

    console.log('Sample data added successfully');
    mongoose.connection.close();
  } catch (error) {
    console.error('Error adding sample data:', error);
  }
};

addSampleData();