const json = 'todo.json'
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

const getData = ()=>JSON.parse(fs.readFileSync(json).toString())
const writeData = (data)=>{
    fs.writeFileSync(json,JSON.stringify(data));
}
const refresh =  ()=>{
    const data = getData();
    data.data = [];
    writeData(data);
}
const howManyDone = ()=>{
    const data = getData();
    var count = 0;
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].isDone==true){
            count++;
        }
    }
    if(count==0){
        return "None"
    }
    return count;
}
const dataExist = (text)=>{
    const data = getData()
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].text==text){
            return true;
        }
    }
    return false;
}
const addTODO = (text)=>{
    const data = getData();
    if(dataExist(text)==false){
        data.data.push({
            text:text,
            isDone:false,
        });
        writeData(data);
    }else{
        console.log(chalk.red('You already have this TODO'));
    }
    console.log(chalk.yellow(`You have ${getData().data.length} TODOs.${howManyDone()} of them is done`));
}
const _todo = ()=>{
    const data = getData();
    var indexer=0;
    for(var i=0;i<data.data.length;i++){
        var a = data.data[i];
        if(a.isDone==false){
            indexer++
            console.log(indexer+") "+a.text);
        }
    }
}
const removeData =(index)=>{
    const data = getData();
    var arr = [];
    for(var i=0;i<data.data.length;i++){
        if(index!=i){
            arr.push(data.data[i]);
        }
    }
    data.data = arr;
    writeData(data);
    console.log(chalk.yellow(`You have ${getData().data.length} TODOs.${howManyDone()} of them is done`));
}
const remove = (title)=>{
    const data = getData();
    for(var i=0;i<data.data.length;i++){
        if(data.data[i].text==title){
            removeData(i);
            break;
        }
    }
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
    var indexer = 0;
    for(var i=0;i<data.data.length;i++){
        var a = data.data[i];
        indexer++
        if(a.isDone==true){
            console.log(indexer+") "+chalk.green(a.text));
        }else{
            console.log(indexer+") "+chalk.blue(a.text));
        }
    }    
    console.log(chalk.yellow(`You have ${getData().data.length} TODOs.${howManyDone()} of them is done`));
}
yargs.command({
    command:'add',
    describe:'Add TODO',
    handler(argv){
        addTODO(argv.title);
    }
}) 
yargs.command({
    command:'list',
    describe:'List TODOs',
    handler(){
        listTODO();
    }
})
yargs.command({
    command:'done',
    describe:'Done this TODO',
    handler(argv){
        isDone(argv.title);
    }
})
yargs.command({
    command:'todo',
    describe:'Thing to do',
    handler(){
        _todo();
    }
})
yargs.command({
    command:'empty',
    describe:'Erases all TODOs',
    handler(){
        refresh();
    }
})
yargs.command({
    command:'remove',
    describe:'Removes TODO',
    handler(argv){
        remove(argv.title);
    }
})
yargs.parse();