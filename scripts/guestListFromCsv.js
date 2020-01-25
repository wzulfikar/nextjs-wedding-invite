// Guess list url (google spreadsheet):
// https://docs.google.com/spreadsheets/u/2/d/1vxAUOc8EpkhRpXNz0rsZcMOSlVt3fGTPKZgFcImRE64/edit?usp=drive_web&ouid=115217004423851001303
// 
// Example usage:
// node ./scripts/guessListFromCsv.js csv-to-guesslist.csv > pages/guess_list.json
const fs = require("fs");
const csv = require("csv-parser");

const csvFile = process.argv[2];

let guessList = [];
fs.createReadStream(csvFile)
  .pipe(csv())
  .on("data", function(data) {
    guessList.push(JSON.stringify(data, null, 2));
  })
  .on("end", function() {
    console.log(`[${guessList.join(",")}]`);
  });
