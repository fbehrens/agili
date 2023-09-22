export default class Fbutil {
  static inc(n: number) {
    return n + 1;
  }
  static between_markers(text: string, line: number) {
    let lines = text.split(`\n`);
    const sep = "#%";
    let tail = lines.slice(line);
    let taill = tail.slice(0, tail.indexOf(sep));
    let head = lines.slice(0, line);
    let headl = head.slice(head.lastIndexOf(sep) + 1);
    return headl.concat(taill).join("\n") + `\n`;
  }
}
