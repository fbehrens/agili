import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAndRepeat', (language : string = '') => {
        // https://docs.microsoft.com/en-us/windows/console/console-virtual-terminal-sequences#cursor-keys
        const escape = language === "powershell" ? "O" : "[";
        const seq = `\u001b${escape}A\n`;
        vscode.commands.executeCommand('workbench.action.files.save').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text": seq }));
	}));
	context.subscriptions.push(vscode.commands.registerCommand('agili.saveAllAndRepeat', (language : string = '') => {
        const escape = language === "powershell" ? "O" : "[";
        const seq = `\u001b${escape}A\n`;
        vscode.commands.executeCommand('workbench.action.files.saveAll').then( () =>
        vscode.commands.executeCommand('workbench.action.terminal.sendSequence',{"text":seq }));
	}));
    context.subscriptions.push(vscode.commands.registerCommand('agili.hello', (ispowershell: boolean = false) => {
        const escape = ispowershell ? 'O' : '[';
        console.log(`Hello1 ${escape}!!!`);
    }));
}

export function deactivate() {}
