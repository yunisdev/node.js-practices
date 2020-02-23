const easybase = require('./app.js');
var yunis = new easybase('yunis huseynzade');
var obj = {
    name:'Yunis',
    surname:'Huseynzade',
    age:16,
    gender:'male'
}
yunis.push(obj);

console.log(yunis.getDataObj());