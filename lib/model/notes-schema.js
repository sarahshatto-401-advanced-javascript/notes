'use strict'

const mongoose = require('mongoose');

const notes = mongoose.Schema({
  category: {type: String, default:'general', required: true},
  text: {type: String, default:'general', required: true},
});

module.exports = mongoose.model('notes', notes);


// You will use the Mongo NoSQL database with a Mongoose Schema and Data Model to implement CRUD functionality to your note taking application 


// As a user, I want my notes to be saved in a database so that I can retrieve them later.

//  // When a user adds a new note, save it to the database. i.e. `node notes.js -add “This is fun” –category school

//  // The application should display a confirmation message: "note saved This is fun"


// As a user, I want to categorize my notes so that I can more easily find them.

// As a user, I want to be able to see a list of my notes so that I can manage them.
//  // Users should be able to list notes from the database
//  //  //  All Notes: node notes.js --list
//  //  //  Notes in a category: node notes.js --list school

// As a user, I want to be able to delete a note

// Users should be able to delete a single note
// Send the –delete argument, with the id of the note to delete