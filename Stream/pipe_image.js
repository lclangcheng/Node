var fs = require("fs");

fs.createReadStream("nodeIcon.jpg").pipe(fs.createWriteStream("pipeImage.jpg"));