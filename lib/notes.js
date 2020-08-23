'use strict'

// brings in the schema file 
const NotesSchema = require('./model/notes-schema');

const NotesCollection = require('./model/notes-collection');

const chalk = require('chalk');

class Notes {
  
 async execute(object) {
    // this[object.command.action](object.command);
    // 
    switch(object.command.action){
      case 'add':
        return this.add(object.command);
      case 'list':
        return this.list(object.command.payload);
      case 'delete':
          return this.delete(object.command.payload);
      default: 
          return Promise.resolve();
    }
  }
  add(object) {
    // Moved to notes.collection
    // const note = new NotesSchema({
    //     text: object.payload,
    //     category: object.category,
    //   });
    //   note.save()
    NotesCollection.create(object)
        .then(dbData =>{
          console.log(`adding note: ${dbData.text}`);
        });
    }
  async list(bananas){
    // console.log(object);

    // if(object.payload){
    //   const result = await NotesSchema.find({ category: object.payload }) 
    //   console.log(result);
    // }
    // else {
    //   const result1 = await NotesSchema.find({}) 
    //   console.log(result1);
    // }
    const results = await NotesCollection.get(bananas);
    results.forEach(note => {
      console.log(note.text);
      console.log(`category: ${chalk.red(note.category)} id: ${chalk.blue(note._id)}`)
      console.log('----------------------------------------------')
    })
    
  }

  delete(id) {
    // NotesSchema.findOneAndDelete({_id: object.payload}) 
    NotesCollection.delete(id)
    .then(() => {
    console.log(`deleting note: ${id}`);
  })
  }
  
}



module.exports = Notes;
