const storage = require('../storage');

module.exports = {
    bootstrap: function(app) {

        // web ui
        app.get('/', function(req, res) {
            res.render('index.jade', {
            });
        });

        app.get('/viz', function(req, res) {
            res.render('viz.jade', {});
        });

        // api
        app.get('/api/save', function(req, res) {
            storage.save(req.query, function() {
                res.sendStatus(200);
            });
        });
    }
};
