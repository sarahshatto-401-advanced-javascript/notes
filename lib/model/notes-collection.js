'use strict';

//
const NotesSchema = require('./notes-schema');

class NotesCollection{
  get(bananas){
    return bananas? NotesSchema.find({category: bananas}):NotesSchema.find({});
  }
  create(object){
    const note = new NotesSchema({
      text: object.payload,
      category: object.category,
    });
    return note.save()
  }
  update(){

  }
  delete(id){
    return NotesSchema.findOneAndDelete({_id: id})
  }
}
module.exports = new NotesCollection;