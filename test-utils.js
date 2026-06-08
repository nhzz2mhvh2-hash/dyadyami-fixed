const { cn } = require('./src/lib/utils');
const assert = require('assert');

try {
  assert.strictEqual(cn('a', 'b'), 'a b');
  assert.strictEqual(cn('a', { 'b': true, 'c': false }), 'a b');
  console.log('Tests passed!');
} catch (e) {
  console.error('Tests failed:', e);
  process.exit(1);
}
