'use strict'
//build a constructor: this will organize the input from the user. So we know what's being typed in. 

const minimist = require('minimist');
/**
 * Creates the Input object based on CL inputs
 * @constructor
 * @returns {Object} command : {action: String, payload: String}
 */
class Input {
  constructor() {
    const args = minimist(process.argv.slice(2));
    this.command = this.parse(args);
    // console.log(this.valid())
  }
  // normalizes the data for us ^^ 
  // This is going to take in the minimist object and return normalized data 
  parse(object) {
    // console.log(object)
    const argsMap = {
      a: 'add',
      add: 'add',
      l: 'list',
      list: 'list',
      d: 'delete',
      delete: 'delete',
    };
    // vv takes in the object that minimist spits out, and looks for the argsMap list of translatable data
    const arg = Object.keys(object).filter(arg => {
      return argsMap[arg];
    })[0];

    const category = object.c || object.category;

    const payload = typeof object[arg] === 'string'? object[arg] : undefined;

    const command = {
      action: argsMap[arg],
      payload: payload,
      category: category,
    };
    console.log(command);
    return command;
  }
  // This is checking to see if its a valid input
  valid() {
    if (!this.command.action) { return false; }
    if (this.command.action == 'add') {
      if (!this.command.payload) {
        return false;
      }
    }
    if (this.command.action == 'delete') {
      if (!this.command.payload) {
        return false;
      }
    }

    return true;

  }
}


// 
module.exports = Input;