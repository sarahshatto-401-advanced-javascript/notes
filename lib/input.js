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
    const argsMap = {
      a: 'add',
      add: 'add',
    };
    const arg = Object.keys(object).filter(arg => {
      return argsMap[arg];
    })[0];
    //
    const command = {
      action: argsMap[arg],
      payload: object[arg],
    };
    return command;
  }
  // This is checking to see if its a valid input
  valid() {
    return !!(this.command.action && this.command.payload);
  }
}


// 
module.exports = Input;