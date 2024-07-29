const moment = require('moment');
const path = require('path');
const fs = require('fs');
const cron = require('node-cron');

const campaignModel = require('../model/campaign');
const response = require('../constants/response');

exports.addCampaign = async(req, res) => {
    try {
        const findExistingCampaign = await campaignModel.findOne({name: req.body.name});
        if(findExistingCampaign){
            return response(res, false, 400, 'Campaign name with the same name already exist.')
        }
       
        req.body.start_date = moment(req.body.start_date,'DD-MM-YYYY').format('DD-MM-YYYY');
        req.body.end_date = moment(req.body.end_date, 'DD-MM-YYYY').format('DD-MM-YYYY');

        // upload document code
        if(req.files){
            if(req.files.offering_upload){
                // const offeringDoc = []
                const fileUploadDir = path.join(__dirname, '../../public/upload/campaign-documents/');
                // if(req.files.offering_upload.length){
                //      for(let i = 0; i< req.files.offering_upload.length; i++){
                //         const uploadDoc = await imageUpload(req.files.offering_upload[i],fileUploadDir,res)
                //         if(uploadDoc.response){
                //             return response(res, false, 422, 'Documents not uploaded.')
                //         }
                //         offeringDoc.push(uploadDoc.document)
                //     }
                //     req.body.offering_upload = offeringDoc
                // }else{
                    const uploadDoc = await imageUpload(req.files.offering_upload,fileUploadDir,res)
                        if(uploadDoc.response){
                            return response(res, false, 422, 'Documents not uploaded.')
                        }
                    req.body.offering_upload = uploadDoc.document;
                // }
            }

            if(req.files.work_upload){
                const workDoc = []
                const fileUploadDir = path.join(__dirname, '../../public/upload/campaign-documents/');
                // if(req.files.work_upload.length){
                //      for(let i = 0; i< req.files.work_upload.length; i++){
                //         const uploadDoc = await imageUpload(req.files.work_upload[i],fileUploadDir,res)
                //         if(uploadDoc.response){
                //             return response(res, false, 422, 'Documents not uploaded.')
                //         }
                //         workDoc.push(uploadDoc.document)
                //     }
                //     req.body.work_upload = workDoc
                // }else{
                    const uploadDoc = await imageUpload(req.files.work_upload,fileUploadDir,res)
                        if(uploadDoc.response){
                            return response(res, false, 422, 'Documents not uploaded.')
                        }
                    req.body.work_upload = uploadDoc.document
                // }
            }
        }
    
        req.body.save_campaign? req.body.save_campaign = true : req.body.save_campaign = false;
        const addCampaign = await campaignModel.create(req.body);
        if(!addCampaign){
            return response(res, false, 422, 'Campaign not added.')
        }else{
            return response(res, true, 201, 'Campaign added successfully.')
        }
    } catch (error) {
        console.log(error, ' ------ error 18 -----');
        return response(res, false, 500, 'Something Went Wrong!')
    }
}

exports.getPastCampaign = async(req, res) => {
    try {
        let campaignList = []
        const findPastCampaign = await campaignModel.find({active: false, save_campaign: false});
        if(findPastCampaign.length){
            await findPastCampaign.map((cNames) =>  campaignList.push({_id: cNames._id, name: cNames.name})  ) 
            return response(res, true, 200, 'Past Campaign List',campaignList);
        }else{
            return response(res, false, 404, 'No Past Campaign Found.')
        }
    } catch (error) {
        console.log(error, ' ---- log error 87 ----');
        return response(res, false, 500, 'Something Went Wrong!')
    }
}

const imageUpload = async(file,dirName,res) => {  
    const docName = file.name; 
        if(!fs.existsSync(dirName)){
            fs.mkdirSync(dirName, { recursive: true})
        }
        const promise = await new Promise(function(resolve, reject){
            file.mv(`${dirName}/` + docName, async function(err){
                if(err){
                    console.log(err);
                    reject(err)
                }else{
                    resolve(null)
                }
            })
        })
        return { response: promise, document: docName }
    }

exports.editCampaign = async(req, res) => {
    try {
        if(req.files){
            const findData = await campaignModel.findById(req.params.id);
            if(req.files.work_upload){
                const findExistingFileName = findData.work_upload;
                const filePath = path.join(__dirname, `../../public/upload/campaign-documents/${findExistingFileName}`);
                // remove existing document
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath)
                }

                // upload new document
                const fileUploadDir = path.join(__dirname, '../../public/upload/campaign-documents/');
                const uploadNewFile = await imageUpload(req.files.work_upload,fileUploadDir,res)
                if(uploadNewFile.response){
                    return response(res, false, 422, 'Documents not uploaded.')
                }
                req.body.work_upload = uploadNewFile.document;
            }

            if(req.files.offering_upload){
                const findExistingFileName = findData.offering_upload;
                const filePath = path.join(__dirname, `../../public/upload/campaign-documents/${findExistingFileName}`);
                // remove existing document
                if (fs.existsSync(filePath)) {
                    fs.unlinkSync(filePath)
                }

                // upload new document
                const fileUploadDir = path.join(__dirname, '../../public/upload/campaign-documents/');
                const uploadNewFile = await imageUpload(req.files.offering_upload,fileUploadDir,res)
                if(uploadNewFile.response){
                    return response(res, false, 422, 'Documents not uploaded.')
                }
                req.body.offering_upload = uploadNewFile.document;
            }
        }

            if(req.body.start_date){
                req.body.start_date = moment(req.body.start_date,'DD-MM-YYYY').format('DD-MM-YYYY')
                req.body.end_date = moment(req.body.end_date, 'DD-MM-YYYY').format('DD-MM-YYYY');
            }
            
        const updateCampaign = await campaignModel.findByIdAndUpdate(req.params.id,
            req.body,
            {new: true}
        );
        if(!updateCampaign){
            return response(res, false, 422, 'Campaign not updated.')
        }else{
            return response(res, true, 201, 'Campaign updated successfully.')
        }
    } catch (error) {
        console.log(error, ' ---- error ----');
        return response(res, false, 500, 'Something Went Wrong!')
    }
}

exports.getCampaignDetails = async(req, res) => {
    try {
        const findData = await campaignModel.findById(req.params.id);
        if(findData){
            return response(res, true, 200, 'Campaign Details',findData);
        }else{
            return response(req, false, 404, 'Campaign Details not found.')
        }
    } catch (error) {
        return response(res, false, 500, 'Something Went Wrong!')
    }
}

exports.closeCampaign = async(req, res) => {
    // scheduled for every day midnight at 12:01 AM
    cron.schedule('1 0 * * *',async () => {
        // cron.schedule('0 */1 * * * *', async() => {
        try {
            const currentDayDate = moment().format('DD-MM-YYYY');
            const getCampaign = await campaignModel.find({saved: false});
            getCampaign.forEach(async(campaignDetails) => {
                 if(campaignDetails.end_date < currentDayDate){
                    const updateCampaign = await campaignModel.findByIdAndUpdate(campaignDetails.id, {active: false});
                    if(!updateCampaign){
                        console.log('Error in cron while updating in campaign closing.');
                    }else{

                        console.log('cron job run successfully.');
                    }
                 }
             })
            
         } catch (error) {
             console.log(`${error} - in cron while Closing Campaign`)
         }
    })
}

// Get Saved Campaigns
exports.getSavedCampaigns = async (req, res) => {
    try {
      const savedCampaigns = await campaignModel.find({ save_campaign: true });
      const formattedCampaigns = savedCampaigns.map(campaign => {
        let content = '';
        if (campaign.post_count > 0) {
          content += `${campaign.post_count} x Post`;
        }
        if (campaign.reel_count > 0) {
          if (content) content += ', ';
          content += `${campaign.reel_count} x Reel`;
        }
        if (campaign.story_count > 0) {
          if (content) content += ', ';
          content += `${campaign.story_count} x Story`;
        }
        
        const datePosted = moment(campaign.start_date, 'DD-MM-YYYY').format('ddd DD MMM YYYY')
        content = content.trim();
        
        return {
          content,
          datePosted,
          platform: campaign.platform,
          location: campaign.location
        };
      });
      console.log('Saved Campaigns:', formattedCampaigns);
      res.status(200).json(formattedCampaigns);
    } catch (error) {
        console.log(error, ' --- log error 239 ---');
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Get Active Campaigns
  exports.getActiveCampaigns = async (req, res) => {
    try {
      const today = new Date();
      const activeCampaigns = await campaignModel.find({
        start_date: { $lte: today },
        end_date: { $gte: today },
        launch_campaign: true
      });
      const formattedCampaigns = activeCampaigns.map(campaign => {
        let content = '';
        if (campaign.post_count > 0) {
          content += `${campaign.post_count} x Post`;
        }
        if (campaign.reel_count > 0) {
          if (content) content += ', ';
          content += `${campaign.reel_count} x Reel`;
        }
        if (campaign.story_count > 0) {
          if (content) content += ', ';
          content += `${campaign.story_count} x Story`;
        }
        const datePosted = moment(campaign.start_date, 'DD-MM-YYYY').format('ddd DD MMM YYYY')
        content = content.trim();
        
        return {
          content,
          datePosted,
          platform: campaign.platform,
          location: campaign.location
        };
      });
      console.log('Active Campaigns:', formattedCampaigns);
      res.status(200).json(formattedCampaigns);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };
  
  // Get Past Campaigns
  exports.getPastCampaigns = async (req, res) => {
    try {
      const today = new Date();
      const pastCampaigns = await campaignModel.find({
        end_date: { $lt: today },
        launch_campaign: true
      });
      const formattedCampaigns = pastCampaigns.map(campaign => {
        let content = '';
        if (campaign.post_count > 0) {
          content += `${campaign.post_count} x Post`;
        }
        if (campaign.reel_count > 0) {
          if (content) content += ', ';
          content += `${campaign.reel_count} x Reel`;
        }
        if (campaign.story_count > 0) {
          if (content) content += ', ';
          content += `${campaign.story_count} x Story`;
        }
        const datePosted = moment(campaign.start_date, 'DD-MM-YYYY').format('ddd DD MMM YYYY')
        content = content.trim();
        
        return {
          content,
          datePosted,
          platform: campaign.platform,
          location: campaign.location
        };
      });
      console.log('Past Campaigns:', formattedCampaigns);
      res.status(200).json(formattedCampaigns);
    } catch (error) {
      res.status(500).json({ message: 'Server Error' });
    }
  };

 exports.getCampaigns = async (req, res) => {
    try {
      const { start_date, end_date, platform, location } = req.query;
  
      // Build the query object
      const query = {};
  
      if (start_date && end_date) {
        query.start_date = { $gte: new Date(start_date) };
        query.end_date = { $lte: new Date(end_date) };
      }
  
      if (platform) {
        query.platform = { $in: platform.split(',') };
      }
  
      if (location) {
        // query.location = { $in: location.split(',') };
        query.location = location;
      }
  
      // Fetch campaigns based on unique platform-location combinations
      let campaigns;
      if (platform && !location) {
        campaigns = await campaignModel.aggregate([
          { $match: query },
          { $group: { _id: "$location", docs: { $push: "$$ROOT" } } },
          { $replaceRoot: { newRoot: { $arrayElemAt: ["$docs", 0] } } }
        ]);
      } else if (location && !platform) {
        campaigns = await campaignModel.aggregate([
          { $match: query },
          { $group: { _id: "$platform", docs: { $push: "$$ROOT" } } },
          { $replaceRoot: { newRoot: { $arrayElemAt: ["$docs", 0] } } }
        ]);
      } else {
        campaigns = await campaignModel.find(query);
      }
  
      res.status(200).send(campaigns);
    } catch (error) {
      res.status(400).send(error);
    }
 }
  