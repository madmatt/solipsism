var test = require('tape');

test("Solipsism", function (t) {
  var Sol = require('../src/Solipsism');
  new Sol();
  t.end();
})
