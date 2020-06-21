import { expect } from 'chai';
import U from '../util';

describe('Util', () => {
  it('increment', () => {
    let r = U.increment(6);
    expect(r).equal(7);
  });
});
