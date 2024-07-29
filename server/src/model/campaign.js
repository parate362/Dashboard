const mongoose = require('mongoose');

const campaignSchema = new mongoose.Schema({
  name: String,
  description: String,
  platform:{
    type: [String],
    enum: ['Instagram', 'Facebook', 'Snapchat', 'Twitter']
  },
  gender: {
    type: String,
    enum: ['All', 'Male', 'Female', 'Other']
  },
  industry: Array,
  location: String,
  start_date: String,
  end_date: String,
  work: {
    type: String,
    enum: ['Post','Repost']
  },
  work_type: {
    type: [String],
    enum: ['Reel', 'Story', 'Post']
  },
  work_link: {
    type: String,
    notNull: false
  },
  work_upload: {
    type: String,
    notNull: false
  },
  payment_selection: {
    type: [String],
    enum: ['Reel', 'Story', 'Post']
  },
  story_count: {
    type: Number,
    default: 0,
  },
  post_count: {
    type: Number,
    default: 0,
  },
  reel_count:  {
    type: Number,
    default: 0,
  },
  offering: {
    type: [String],
    enum: ['Payment', 'Product']
  },
  offering_option: {
    type: String,
    enum: ['Fixed', 'Negotiable']
  },
  fixed_amount: {
    type: Number,
    notNull: false
  },
  min_amount: {
    type: Number,
    notNull: false
  },
  max_amount: {
    type: Number,
    notNull: false
  },
  offering_product_description:{
    type: String,
    notNull: false
  },
  offering_link: {
    type: String,
    notNull: false
  },
  offering_upload: {
    type: String,
    notNull: false
  },
  save_campaign: {
    type: Boolean,
    default: false
  },
  launch_campaign: {
   type: Boolean,
   default: false
  }
},
{
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'},
  versionKey: false
})


module.exports = mongoose.model('Campaign', campaignSchema);
