import * as assert from "assert";
import Fbutil from "../lib/fbutil";

describe("Fbutil", () => {
  it("inc", () => {
    let r = Fbutil.inc(6);
    assert.strictEqual(r, 7);
  });
  it("between_markers", () => {
    let text = `1\n#%\n2\n3\n4\n#%\n5\n`;
    assert.strictEqual(Fbutil.between_markers(text, 3), `2\n3\n4\n`);
  });
});
