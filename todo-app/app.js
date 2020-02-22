const json = 'todo.json'
const fs = require('fs');
const chalk = require('chalk');

const getData = ()=>{
    return JSON.parse(fs.readFileSync(json).toString())
}
const writeData = (data)=>{
    fs.writeFileSync(json,JSON.stringify(data));
}

const addTODO = (text)=>{
    const data = getData();
    data.data.push({
        text:text,
        isDone:false,
    });
    writeData(data);
}
const isDone = (text)=>{
    
}