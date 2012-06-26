var restify = require('restify'),
        images = require('./routes/images.js').images,
        util = require('util'),
        server = restify.createServer({
            name:'CuteKitten'
        });

// Config
server.use(restify.queryParser());
server.use(restify.acceptParser(server.acceptable));
var port = process.env.PORT || 5000;

// Set CORS headers
server.pre(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST");
    res.header("Access-Control-Allow-Headers", "Content-Length, Content-Type, X-Requested-With");
    return next();
});

// Routes
server.get(/^\/(\d{3})x(\d{3}).jpg/, images.get);
//server.get('/300x200.jpg', images.get);

server.on('uncaughtException', function (req, res, route, err) {
    console.error(util.inspect(err));
    res.send(err);
});

server.listen(port, function () {
    console.log("Cute Kitten server instance %s listening on %s", server.name, server.url);
});
