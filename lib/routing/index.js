

module.exports = {
    bootstrap: function(app) {

        // web ui
        app.get('/', function(req, res) {
            res.render('index.jade', {
            });
        });

        // api
        app.get('/api/submit', function(req, res) {
            console.log(req.query);
            res.sendStatus(200);
        });
    }
};
