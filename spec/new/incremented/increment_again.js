function act(c) {
  c.sut.increment();
}
act._name = module.filename;
act.base = require('../increment');
module.exports = act;
