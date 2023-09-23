import Agili from "../agili";

export default class Fbutil {
  static inc(n: number) {
    return n + 1;
  }

  static findLastIndex<T>(
    array: Array<T>,
    predicate: (value: T) => boolean
  ): number {
    let l = array.length;
    while (l--) {
      if (predicate(array[l])) return l;
    }
    return -1;
  }
  static between_markers(text: string, line: number) {
    let lines = text.split(`\n`);
    const sep = "#%";
    let tail = lines.slice(line);
    let taill = tail.slice(
      0,
      tail.findIndex((e) => e.startsWith(sep))
    );
    let head: Array<string> = lines.slice(0, line);
    let headl = head.slice(
      Fbutil.findLastIndex(head, (e: string) => e.startsWith(sep)) + 1
    );
    let cell = headl.concat(taill);
    let code = cell.map((s) => s.replace(/^## /, ""));
    return code.join("\n") + `\n`;
  }
}
