const { youTubeData } = require('../controller/youtube');

module.exports = function(app, router) {
    router.get('/video-data', youTubeData);
    app.use('/api',router)
}

 
