'use strict'

const minimist = require('minimist');

const Input = require('./lib/input');

// const Note = require('./lib/notes');
const Notes = require('./lib/notes');

const input = new Input();

const note = new Notes(input);

if (input.valid()){
  note.execute()
}else{
  process.exit(9)
}

//our notes application will accept and validate the user’s input, and confirm that the note was valid.//

// As a user, I want to be able to call the application using command line standard syntax, indicating the text of a note I wish to add so that the system will eventually be able to save this note.
// As a user, I expect that the application will confirm my intent. 

// console.log(minimist(process.argv.slice(2)));
// // this is meant to restrict the amount of crap you get back. 

//npm init -y initializes the package, and creates a package.json (metadata for handling the file)

// minimist deals specifically with parsing command line stuff- returns an object instead of an array. Creates key value pairs out of your input.