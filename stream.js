const dgram = require("dgram");

module.exports = function (app) {

    console.log("asdfasdf");


    var inputs = {
        hdmi1: [],
        hdmi2: []
    };


    for (let name in inputs) {

        const port = 10000 + Object.keys(inputs).indexOf(name);
        const socket = dgram.createSocket({
            type: "udp4",
            reuseAddr: true
        });

        // wait for message on udb port
        // write to http response in inputs
        socket.on("message", (buffer, remote) => {
            if (inputs[name]) {

                console.log("Write");

                inputs[name].forEach((res) => {
                    if (res) {

                        res.write(buffer);

                    }
                });

            }
        });


        socket.on("listening", function () {

            const addr = this.address();
            console.log("Listen on %s:%d", addr.address, addr.port);

        });


        socket.bind(port, "0.0.0.0");

    }







    app.get("/source/:source", (req, res) => {

        // feedback
        console.log("Add http clien to source '%s'", req.params.source);

        const range = req.headers.range;

        /*
        if (range) {

            console.log("RANGE HEADER SET");

            const head = {
                //'Content-Range': `bytes ${start}-${end}/${fileSize}`,
                'Accept-Ranges': 'bytes',
                //'Content-Length': chunksize,
                'Content-Type': 'video/mp4',
            }

            res.writeHead(206, head);

        } else {

            console.log("NO RANGE HEADER!");

            const head = {
                //'Content-Length': 0,
                //'Content-Type': 'video/mp4',
                "Content-Type": "application/octet-stream"
            }

            res.writeHead(200, head);

        }*/

        req.connection.on("end", function () {

            console.log("ABORTED");

            const index = inputs[req.params.source].indexOf(res);
            inputs[req.params.source].splice(index, 1);

        });


        res.writeHead(200, {
            //'Content-Length': 0,
            'Content-Type': 'video/mp4'
        });

        inputs[req.params.source].push(res);

    });



}