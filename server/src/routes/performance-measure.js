const { generateData, getPerformanceMeasure } = require('../controller/performance-measure');

module.exports = function(app, router) {
    router.post('/generate-data', generateData);
    router.get('/get-performance', getPerformanceMeasure);
    app.use('/api',router)
}