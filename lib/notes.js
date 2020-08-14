'use strict'
/**
 * @constructor
 */
class Notes {
  constructor(object) {
    this.action = object.command.action;
    this.payload = object.command.payload;
  }
  execute() {
    this[this.action]();
  }
  add() {
    const note = {
      id: Date.now(),
      note: this.payload,
    };
    console.log(`adding note: ${note.note}`);
  }
}



module.exports = Notes;
