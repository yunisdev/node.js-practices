const chalk = require('chalk');
const yargs = require('yargs')
const notes = require('./notes');
const fs = require('fs');

yargs.command({
    command:'add',
    describe:'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption:true,
            type:'string',
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string',
        },
    },
    handler:function(argv){
        notes.addNote(argv.title,argv.body);
    }
});
yargs.command({
    command:'remove',
    describe:'Remove a note',
    builder:{
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.removeNote(argv.title);
    }
});
yargs.command({
    command:'list',
    describe:'List notes',
    handler:function(){
        notes.listNote();
    }
});
yargs.command({
    command:'read',
    describe:'Read notes',
    handler:function(argv){
        notes.readNotes(argv.title);
    }
})
yargs.command({
    command:'recover',
    describe:'Recover notes',
    builder:{
        title:{
            demandOption:true,
            type:'string'
        }
    },
    handler:function(argv){
        notes.recoverNote(argv.title);
    }
})
yargs.command({
    command:'erase',
    describe:'Erase all notes',
    handler:function(){
        notes.eraseNotes();
    }
})
yargs.parse();