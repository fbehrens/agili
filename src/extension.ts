import * as vscode from 'vscode';
import { Console } from 'console';

export function activate(context: vscode.ExtensionContext) {
	console.log('now');
	context.subscriptions.push(vscode.commands.registerCommand('mycodeext1.helloWarning', () => {
		vscode.window.showWarningMessage('warning from myCodeExt1');
	}));
	context.subscriptions.push(vscode.commands.registerCommand('mycodeext1.Time', () => {
        let now : string = new Date().toLocaleString();
        vscode.window.showInformationMessage(`the time is: ${now}. Will we go now`,'yes','no').
          then( s => console.log(`you have chosen: ${s}`))  ;
	}));
}

export function deactivate() {}
