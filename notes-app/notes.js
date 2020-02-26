const fs = require('fs');
const chalk = require('chalk');
const jsonFile = 'notes.json';

const getNotes = ()=>{
    return 'Your notes...'
}
const titleExist = (json,title)=>{
    for(var i =0;i<json.notes.length;i++){
        if(json.notes[i].title==title){
            return true;
        }
    }
    return false;
}
const addNote = (_title,_body)=>{
    const _notes = loadNotes();

    if(titleExist(_notes,_title)==false){
        _notes.notes.push({
            title:_title,
            body:_body,
            deleted:false
        });
    }else{
        console.log(chalk.red('Please use another title.This title exist'));
    }
    writeToJSON(_notes);
}
const writeToJSON = (data)=>{
    fs.writeFileSync(jsonFile,JSON.stringify(data));
}
const loadNotes = ()=>JSON.parse(fs.readFileSync(jsonFile).toString());

const removeNote = (title)=>{
    const _notes = loadNotes();
    for(var i =0;i<_notes.notes.length;i++){
        if(_notes.notes[i].title==title){
            _notes.notes[i].deleted = true;
        }
    }
    writeToJSON(_notes);
}
const listNote = ()=>{
    const _notes = loadNotes();
    var indexer=1;
    console.clear();
    for(var i=0;i<_notes.notes.length;i++){
        if(_notes.notes[i].deleted==false){
            var d = _notes.notes[i];
            console.log(`${indexer}-${d.title}`);
            indexer++;
        }
    }
}
const recoverNote = (title)=>{
    const _notes = loadNotes();
    if(title=="*"){
        for(var i =0;i<_notes.notes.length;i++){
            _notes.notes[i].deleted = false;
        }
    }
    else{
        for(var i =0;i<_notes.notes.length;i++){
            if(_notes.notes[i].title==title){
                _notes.notes[i].deleted = false;
            }
        }
    }
    writeToJSON(_notes);
}

const eraseNotes = ()=>{
    const _notes = loadNotes();
    _notes.notes = []
    writeToJSON(_notes);
}
const readNotes = (title)=>{
    const _notes = loadNotes();
    for(var i =0;i<_notes.notes.length;i++){
        if(_notes.notes[i].title==title){
            console.clear();
            const a = _notes.notes[i];
            console.log(`${a.title}\n------------\n${a.body}`);
            break;
        }
    }
}

module.exports = {
    getNotes:getNotes,
    addNote:addNote,
    removeNote:removeNote,
    listNote:listNote,
    recoverNote:recoverNote,
    eraseNotes:eraseNotes,
    readNotes:readNotes,
}