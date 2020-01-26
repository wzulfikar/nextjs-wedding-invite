// Example usage:
// node ./scripts/guestListFromCsv.js guest_list.csv > pages/guess_list.json

const fs = require("fs");
const csv = require("csv-parser");

const csvFile = process.argv[2];

let guestList = [];
fs.createReadStream(csvFile)
  .pipe(csv())
  .on("data", function(data) {
    guestList.push(data);
  })
  .on("end", function() {
    const guestListJson = {
      meta: {
        lastUpdatedAt: new Date().toISOString()
      },
      data: guestList
    };
    console.log(JSON.stringify(guestListJson, null, 2));
  });
