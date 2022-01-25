import * as vscode from 'vscode';

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
}

export function deactivate() {}
