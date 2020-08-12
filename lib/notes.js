'use strict'
/**
 * @constructor
 */
const Notes= function(object){
  this.action = object.command.action;
  this.payload = object.command.payload;
}

Notes.prototype.execute= function(){
  this[this.action]()
}

Notes.prototype.add= function(){
  const note = {
    id: Date.now(),
    note: this.payload,
  }
  console.log(`adding note: ${note.note}`)
}

module.exports = Notes;
