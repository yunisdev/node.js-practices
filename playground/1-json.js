const fs = require('fs');

const data = JSON.parse(fs.readFileSync('1-json.json').toString());

data.name = "Yusif";
data.age = 16;
const dataString = JSON.stringify(data);

fs.writeFileSync('1-json.json',dataString);