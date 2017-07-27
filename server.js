var express = require("express"),
    path = require("path"),
    multer = require("multer");

var app = express();
app.use(express.static(path.join(__dirname, "public")));

app.post("/filesize", multer().single("file"), function(request, response) {

    response.json({

        fileName: request.file.originalname,
        size: request.file.size

    });
});

app.listen(process.env.PORT || 1337);