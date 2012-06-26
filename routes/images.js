var http = require('http');

function _getNewImage(x, y, success, failure) {
    var options = {
        host:'placekitten.com',
        port:'80',
        path: "/" + x + "/" + y
    };

    http.get(options, function (res) {
        var imagedata = "";
        res.setEncoding('binary');

        res.on('data', function (chunk) {
            imagedata += chunk;
        });

        res.on('error', function (err) {
            failure(err);
        });

        res.on('end', function () {
            success(imagedata, res.headers);
        });
    });
}

function _get(req, res, next) {
    var x = req.params[0];
    var y = req.params[1];

    function failure(err) {
        res.send(400, "Invalid request");
        return next();
    }

    function success(data) {
        _sendResponse(res, data, {'Content-Type':'image/jpeg'});
        return next();
    }

    _getNewImage(x, y, success, failure);
}

function _sendResponse(res, body, headers) {
    res.header('Content-Length', body.length);
    Object.keys(headers).forEach(function (header) {
        res.header(header, headers[header]);
    });
    res.write(body, 'binary');
    res.end();
}

exports.images = {
    get:_get
};
