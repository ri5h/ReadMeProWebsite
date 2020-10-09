const fs = require("fs");

//Step 1: move files from other repo to here in public
const srcPath = `${__dirname}/../ReadMePros/ReadMe`;
const destPath = `${__dirname}/public/readme`;
require("sync-directory")(srcPath, destPath, {
  type: "copy",
});

//Step 2: build readmelist file with array of configs
const files = fs.readdirSync(destPath);

let ReadmeList = [];
files.forEach((el) => {
  let config = JSON.parse(
    fs.readFileSync(`${destPath}/${el}/config.json`, "utf8")
  );
  config.dir = el;
  ReadmeList.push(config);
});
let stringToWrite = `export default ${JSON.stringify(ReadmeList)}`;
fs.writeFileSync("./src/ReadMeList.js", stringToWrite);
