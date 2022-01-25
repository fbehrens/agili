import * as assert from 'assert';
import U from '../lib/util';

describe('Util', () => {
  it('increment', () => {
    let r = U.increment(6);
    assert.strictEqual(r,7);
  });
});
