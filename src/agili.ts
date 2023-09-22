import * as vscode from "vscode";
import Fbutil from "./lib/fbutil";

export default class Agili {
  static getCode() {
    const e = vscode.window.activeTextEditor!;
    const d = e.document!;
    const s = e.selection;
    if (s.isEmpty) {
      const pos = s.active;
      console.log(`s.line=` + pos.line);
      return Fbutil.between_markers(d.getText(), pos.line);
    } else {
      return d.getText(s);
    }
  }
}
