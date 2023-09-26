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
      return Fbutil.betweenMarkers(d.getText(), pos.line);
    } else {
      return Fbutil.activatePseudoComments(d.getText(s));
    }
  }
}
