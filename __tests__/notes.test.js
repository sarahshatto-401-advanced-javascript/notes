'use strict';

require('@code-fellows/supergoose');

const Notes = require('../lib/notes');
// importing ^^

//creating a new notes object so that you can interact with it

// testing execute: 
describe('execute', () => {
  it('execute does nothing with invalid options', () =>{
    const notes = new Notes({command:'add', payload: 'test'});
    return notes.add();
    expect(notes.add).toHaveBeenCalled();
  })
}) 
