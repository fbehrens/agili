import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	console.log('now');
	context.subscriptions.push(vscode.commands.registerCommand('mycodeext1.helloWarning', () => {
		vscode.window.showWarningMessage('warning from myCodeExt1');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('mycodeext1.Time', () => {
        let now = new Date().toLocaleString();
		vscode.window.showInformationMessage(`the time is: ${now}`);
	}));
}

export function deactivate() {}
