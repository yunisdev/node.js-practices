const fs = require('fs');
module.exports = class {
    dbFile;
    constructor(dbName) {
        var name='';
        for(var i=0;i<dbName.length;i++){
            if(dbName[i]==' '){
                name+='-';
            }else{
                name+=dbName[i];
            }
        }
        this.dbFile = name+'.json';
        fs.writeFileSync(this.dbFile,'[]');
    }
    getDataStr(){
        return fs.readFileSync(this.dbFile).toString();
    }
    getDataObj(){
        return JSON.parse(this.getDataStr());
    }
    writeData(data){
        fs.writeFileSync(this.dbFile,JSON.stringify(data));
    }
    push(obj){
        const data = JSON.parse(this.getDataStr());
        data.push(obj);
        this.writeData(data);
    }
    eraseAllData(){
        fs.writeFileSync(this.dbFile,'[]');
    }
}