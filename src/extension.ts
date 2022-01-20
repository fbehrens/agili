import * as vscode from 'vscode';
import { Console } from 'console';
import u from './util';
var util = require('util');

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAndRepeat', () => {
        // https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences#cursor-keys
        const escape = vscode.window.activeTextEditor?.document.languageId === "powershell" ? "O" : "[";
        const seq = `\u001b${escape}A\n`;
        vscode.commands.executeCommand('workbench.action.files.save').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text": seq }));
	}));
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAllAndRepeat', () => {
        const escape = vscode.window.activeTextEditor?.document.languageId === "powershell" ? "O" : "[";
        const seq = `\u001b${escape}A\n`;
        vscode.commands.executeCommand('workbench.action.files.saveAll').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text":seq }));
	}));
	context.subscriptions.push(vscode.commands.registerCommand('agili.play', () => {
        // vscode.env.clipboard.readText()
        //  .then( e => console.log(`read the Clipboard has ${e}`) );

        // let u =vscode.Uri.parse("https://heise.de");
        // vscode.env.openExternal(u);

        const t= vscode.window.activeTerminal;
        if (!t){ return undefined; };
        const e = vscode.window.activeTextEditor;
        if (!e){ return undefined; };
        let selectionRange: vscode.Range;
        if (e.selection.isEmpty) {
            selectionRange = e.document.lineAt(e.selection.start.line).range;
            vscode.commands.executeCommand('cursorDown').then( () =>
            vscode.commands.executeCommand('cursorHome'));
         } else {
            selectionRange = new vscode.Range( e.selection.start, e.selection.end);
        }
        const text = e.document.getText(selectionRange);
        console.log(util.inspect(text));
        t.sendText(text);
        console.log("zwei");

        // console.log(`Util.increment(3)=${ u.increment(3) }`);
    }));
}

export function deactivate() {}
