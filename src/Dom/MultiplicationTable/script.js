const num = Number(prompt("Number to multiply:", 0));
const max = 10;

for (let i = 1; i < max + 1; i++) {
	document.writeln(`<br />`);
	document.writeln(`${num}*${i}=${num * i}`);
}
