const chalk = require('chalk');
const yargs = require('yargs');
var treeHead=yargs.argv.head;
var treeBody=yargs.argv.body;

var maxX = 1+(treeHead-1)*2;
const multiChar = (count,char)=>{
    var result = '';
    for(var i=0;i<count;i++){
        result+=char;
    }
    return result;
}
//Draw head
for(var i=1;i<=maxX;i+=2){
    console.log(
        chalk.green(
            multiChar((maxX-i)/2," ")+
            multiChar(i,"o")+
            multiChar((maxX-i)/2," ")
        )
    );
}

//Draw body
for(var i=1;i<=treeBody;i++){
    console.log(
        chalk.hex('#D2691E')
        (
            multiChar((maxX-3)/2," ")+
            multiChar(3,"o")+
            multiChar((maxX-3)/2," ")
        )
    )
}