import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	console.log('activate myCodeExt1');

	let disposable = vscode.commands.registerCommand('mycodeext1.helloWorld', () => {
		vscode.window.showWarningMessage('warning from myCodeExt1');
	});
	context.subscriptions.push(disposable);
}

export function deactivate() {}
