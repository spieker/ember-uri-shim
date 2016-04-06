import { test, module } from 'qunit';
import URI from 'uri';

module('Unit | URI exports');

test('URI exports', (assert) => {
  assert.ok(URI, 'URI exports an object');
});

test('URI is a function', (assert) => {
  assert.equal(typeof URI, 'function');
});

test('URI returns an object', (assert) => {
  assert.equal(typeof URI('http://example.com'), 'object');
});

test('URI parses the input', (assert) => {
  assert.equal(URI('http://example.com').host(), 'example.com');
});
