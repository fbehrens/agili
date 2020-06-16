import * as vscode from 'vscode';
import { Console } from 'console';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAndRepeat', () => {
        vscode.commands.executeCommand('workbench.action.files.save').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text":"\u001b[A\u000D" }));
	}));
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAllAndRepeat', () => {
        vscode.commands.executeCommand('workbench.action.files.saveAll').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text":"\u001b[A\u000D" }));
	}));
}

export function deactivate() {}
