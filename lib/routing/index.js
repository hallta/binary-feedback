

module.exports = {
    bootstrap: function(app) {
        app.get('/', function(req, res) {
            res.render('index.jade', {
            });
        });
    }
};