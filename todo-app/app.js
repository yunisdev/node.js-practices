const json = 'todo.json'
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

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
    const data = getData();
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].text==text){
            data.data[i].isDone = true;
        }
    }
    writeData(data);
}
const listTODO = ()=>{
    const data = getData();
    for(var i=0;i<data.data.length;i++){
        var a = data.data[i];
        if(a.isDone==true){
            console.log(chalk.green(a.text));
        }else{
            console.log(chalk.blue(a.text));
        }
    }
}
yargs.command({
    command:'add',
    describe:'Add TODO',
    handler:(argv)=>{
        addTODO(argv.title);
    }
}) 
yargs.command({
    command:'list',
    describe:'List TODOs',
    handler:()=>{
        listTODO();
    }
})
yargs.command({
    command:'done',
    describe:'Done this TODO',
    handler:(argv)=>{
        isDone(argv.title);
    }
})
yargs.parse();