#!/usr/bin/env node
'use strict'

const minimist = require('minimist');

const Input = require('./lib/input');

const Notes = require('./lib/notes');

const mongoose = require('mongoose');

require("dotenv").config();

const chalk = require('chalk');

// Where to look 
const MONGODB_URI = 'mongodb://localhost:27017/Notesy';

// The "on" switch 
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology:true,

});

const input = new Input();

const note = new Notes();

if (input.valid()){
  note.execute(input)
    .then(mongoose.disconnect);
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


// Lab03: 
//  //  // As a user, I want my notes to be saved in a database so that I can retrieve them later.
// to save it to a database, we should choose 
//  //  // As a user, I want to categorize my notes so that I can more easily find them.
//  //  // As a user, I want to be able to see a list of my notes so that I can manage them.
//  //  // As a user, I want to be able to delete a note