var fs = require('fs'); 

describe('CI sequence', () => {

  var fileContents;
  beforeEach(() => {
    fileContents = fs.readFileSync('ci.md', 'utf8');
  });

  it('the list has a header', () => {
    expect(/.*#.*/ig.test(fileContents)).toBe(true);
  });

  it('does not contain the sneaky bug', () => {
    expect( /.*sneaky\s+bug.*/gi.test(fileContents)).toBe(false);
  });
  

});
