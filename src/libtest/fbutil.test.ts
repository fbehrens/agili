import * as assert from "assert";
import Fbutil from "../lib/fbutil";

describe("Fbutil", () => {
  it("inc", () => {
    let r = Fbutil.inc(6);
    assert.strictEqual(r, 7);
  });
  it("findLastIndex", () => {
    assert.strictEqual(
      Fbutil.findLastIndex([1, 2, 4, 3, 5, 2, 1], (e) => e > 2),
      4
    );
  });
  it("between_markers", () => {
    let text = `1\n#% startmarker\n2\n## 3\n4\n#% endmarker\n5\n`;
    assert.strictEqual(Fbutil.between_markers(text, 3), `2\n3\n4\n`);
  });
});
