const fs = require("fs");
const http = require('http');
const express = require("express");
const app = express();


const server = http.Server(app);
const io = require('socket.io')(server);


io.on('connection', function (socket) {


    setTimeout(function () {
        console.log("Emit data event");
        socket.emit("data", [
            {
                _id: "e49c3151-49d3-4fb1-9de0-fb31f8eb1b17",
                title: "葉問外傳：張天志",
                poster:
                    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/puPdv7xyTM8Zidli3TPjWbAPcWJ.jpg"
            },
            {
                _id: "d49b3393-9725-4319-8549-8f2ec95a2989",
                title: "Spider-Man: A New Universe",
                poster:
                    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/iSV8qnNhnOgQ1TyQbQfqEDGroFW.jpg"
            },
            {
                _id: "d49b3393-9725-4319-8549-8f2ec95b2989",
                title: "Phantastische Tierwesen: Grindelwalds Verbrechen",
                poster:
                    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wNGupBYMeUCmXCT3nUUQzIVLmuf.jpg"
            },
            {
                _id: "b6e7ce5d-d419-4747-8246-bbd8943a6590",
                title: "Aquaman",
                poster:
                    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/i2dF9UxOeb77CAJrOflj0RpqJRF.jpg"
            },
            {
                _id: "b6e7ce5d-d419-4747-8246-ade8943a6590",
                title: "Avengers: Infinity War",
                poster:
                    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9mvgmX2b05SERQWC1IAGIdkfd8n.jpg"
            },
            {
                _id: "a6e7ce5d-d419-4747-8246-ade8943a6590",
                title: "Mary Poppins‘ Rückkehr",
                poster:
                    "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uIJLCtJ3iMmSh0F68NZN3QMyxUk.jpg"
            }
        ])
    }, 5000);

    console.log('a user connected');

});



// Custom shell launcher (app autostart)
// https://www.askvg.com/how-to-apply-and-safely-use-custom-user-interface-shell-or-explorer-in-windows/
// https://docs.microsoft.com/en-us/windows-hardware/customize/enterprise/shell-launcher
// https://superuser.com/questions/1016380/how-do-i-replace-the-system-shell-explorer-exe-with-another-process-in-windows


// HDMI Device wiedergeben:
// https://medium.com/@sarinsuriyakoon/quick-start-with-ffmpeg-nodejs-30fb4166acbf
// ffmpeg öffnet direct show gerät
// stream zu electron




/*
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
*/


//http://robotjs.io/docs/examples
//https://whatwebcando.today/device-motion.html


require("./stream.js")(app);


app.get('/file', function (req, res) {

    const path = './public/bbb_sunflower_1080p_60fps_normal.mp4';
    const stat = fs.statSync(path);
    const fileSize = stat.size;
    const range = req.headers.range;

    if (range) {

        const parts = range.replace(/bytes=/, "").split("-");
        const start = parseInt(parts[0], 10);
        const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
        const chunksize = (end - start) + 1;

        const rs = fs.createReadStream(path, { start, end });

        const head = {
            'Content-Range': `bytes ${start}-${end}/${fileSize}`,
            'Accept-Ranges': 'bytes',
            'Content-Length': chunksize,
            'Content-Type': 'video/mp4',
        }

        res.writeHead(206, head);
        rs.pipe(res);

    } else {

        const head = {
            'Content-Length': fileSize,
            'Content-Type': 'video/mp4',
        }

        res.writeHead(200, head);

        const rs = fs.createReadStream(path);



        rs.pipe(res);

    }



});






app.use(express.static("public"));

server.listen(80, "0.0.0.0", function () {
    const addr = this.address();
    console.group("HTTP listen on %s:%d", addr.address, addr.port);
});