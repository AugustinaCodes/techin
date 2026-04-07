const fs = require("fs");
const path = require("path");

// kelias iki katalogo
//console.log(__dirname);

const dir = path.join(__dirname, "data.txt");
// viska mato komandineje eiluteje ir sudeda i masyva
console.log(process.argv);
const [, , cmd, ...rest] = process.argv;

const writeToFile = (data) => {
  fs.writeFile(dir, data, (err) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Failas sekmingai irasytas");
    }
  });
};

const readFile = () => {
  fs.readFile(dir, "utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    } else {
      console.log("Duomenys is failo " + data);
    }
  });
};

if (cmd === "add") writeToFile(rest.join(" "));
if (cmd === "read") readFile();
