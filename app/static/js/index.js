'use strict';

var request = require('request');
var httpPort = 8935

function start() {
    setInterval(
        function() {
            request("http://localhost:"+httpPort+"/peersCount", function(err, res, body) {
                var count = JSON.parse(body)["count"]
                $("#peers-count").text("Peers: " + count);
            })
        }, 3000);
}

start()