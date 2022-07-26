// test/Box.proxy.js
// Load dependencies
const { expect } = require('chai');
 
let Box;
let box;
 
// Start test block
describe('Box (proxy)', function () {
  beforeEach(async function () {
    Box = await ethers.getContractFactory("Box_20220726");
    box = await upgrades.deployProxy(Box, [21], {initializer: 'store'});
  });
 
  // Test case
  it('retrieve returns a value previously initialized', async function () {
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await box.retrieve()).toString()).to.equal('21');
  });
});