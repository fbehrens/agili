import * as vscode from 'vscode';
import { Console } from 'console';
import u from './util';

export function activate(context: vscode.ExtensionContext) {

    console.log('activate');
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAndRepeat', () => {
        vscode.commands.executeCommand('workbench.action.files.save').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text":"\u001b[A\u000D" }));
	}));
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAllAndRepeat', () => {
        vscode.commands.executeCommand('workbench.action.files.saveAll').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text":"\u001b[A\u000D" }));
	}));
	context.subscriptions.push(vscode.commands.registerCommand('agili.play', () => {
        // vscode.env.clipboard.readText()
        //  .then( e => console.log(`read the Clipboard has ${e}`) );

        // let u =vscode.Uri.parse("https://heise.de");
        // vscode.env.openExternal(u);

        // const t= vscode.window.activeTerminal;
        // if (!t){ return undefined; };
        // const e = vscode.window.activeTextEditor;
        // if (!e){ return undefined; };
        // let selectionRange: vscode.Range;
        // if (e.selection.isEmpty) {
        //     selectionRange = e.document.lineAt(e.selection.start.line).range;
        //     vscode.commands.executeCommand('cursorDown').then( () =>
        //     vscode.commands.executeCommand('cursorHome'));
        //  } else {
        //     selectionRange = new vscode.Range( e.selection.start, e.selection.end);
        // }
        // const sel = e.document.getText(selectionRange);
        // t.sendText(sel);

        console.log(`Util.increment(3)=${ u.increment(3) }`);
    }));
}

export function deactivate() {}
