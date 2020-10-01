import {
    executeCommand,
	registerCommand,
	registerOverride
} from "ez:command";

registerCommand("raid", "Initiate illager raids.", 0);
registerOverride("raid", [], function () {
	if (this.player) {
		let thisPlayer = this.player.name;
		
		executeCommand(`effect give @a[name="${thisPlayer}",tag=staff] bad_omen`);
		executeCommand(`tellraw @a[name="${thisPlayer}",tag=staff] {"rawtext":[{"text":"§aRaid Initiated"}]}`);

	}else throw ["error, this command can only be used in game!", "/raid"];
});

console.log("raid.js loaded"); 