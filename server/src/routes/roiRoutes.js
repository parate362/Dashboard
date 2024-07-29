// routes/roiRoutes.js
const { generateData,calculateROI } = require('../controller/roiController');

module.exports = function(app, router) {
    router.post('/add-static-data', generateData);
    router.get('/calculate-roi', calculateROI);
    app.use('/api',router)
}


