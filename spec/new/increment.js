function act(c) {
  c.sut.increment();
}
act._name = module.filename;
act.base = require('../new');
module.exports = act;
