import * as vscode from "vscode";
import Fbutil from "./lib/fbutil";
import Agili from "./agili";

export function activate(context: vscode.ExtensionContext) {
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "agili.saveAndRepeat",
      (language: string = "") => {
        // https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences#cursor-keys
        const escape = language === "powershell" ? "O" : "[";
        const seq = `\u001b${escape}A\n`;
        vscode.commands
          .executeCommand("workbench.action.files.save")
          .then(() =>
            vscode.commands.executeCommand(
              "workbench.action.terminal.sendSequence",
              { text: seq }
            )
          );
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      "agili.saveAllAndRepeat",
      (language: string = "") => {
        const escape = language === "powershell" ? "O" : "[";
        console.log({ escape });
        const seq = `\u001b${escape}A\n`;
        vscode.commands
          .executeCommand("workbench.action.files.saveAll")
          .then(() =>
            vscode.commands.executeCommand(
              "workbench.action.terminal.sendSequence",
              { text: seq }
            )
          );
      }
    )
  );
  context.subscriptions.push(
    vscode.commands.registerCommand("agili.execute_cell", () => {
      const s = Agili.getCode();
      console.log(`terminal.sendSequence: >>>${s}<<<`);
      vscode.commands.executeCommand("workbench.action.terminal.sendSequence", {
        text: s,
      });
    })
  );

  context.subscriptions.push(
    vscode.commands.registerCommand("agili.runActiveEditorFile", () => {
      const e = vscode.window.activeTextEditor;
      if (!e) {
        return undefined;
      }
      const filename = e.document.fileName;
      const ext = filename.split(".").at(-1)!;
      const interpreter = { py: "python3", ts: "tsx", js: "node" }[ext];
      if (!interpreter) {
        return undefined;
      }
      vscode.commands.executeCommand("workbench.action.terminal.sendSequence", {
        text: `${interpreter} ${filename}\n`,
      });

      //   console.log({ filename, ext, interpreter });
    })
  );
}

export function deactivate() {}
