const campaignController = require('../controller/campaign');

module.exports = async(app, router) => {
    router.post('/add-campaign', campaignController.addCampaign)
    router.put('/edit-campaign/:id', campaignController.editCampaign)
    router.get('/get-past-campaign', campaignController.getPastCampaign)
    router.get('/saved', campaignController.getSavedCampaigns);
    router.get('/active', campaignController.getActiveCampaigns);
    router.get('/past', campaignController.getPastCampaigns);
    router.get('/campaign', campaignController.getCampaigns);

    app.use(router)
}