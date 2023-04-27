import "./jquery.js";

const splashes = [
	"[object Object]",
	"[object JSON]",
	"<i><b>DO YOU LIKE MY JQUERY ANIMATIONS???</b></i>",
	"Note to juan: Pale moon is ancient and doesn't like new stuff!",
	`DIE! <i>throws die...</i> a ${Math.round(Math.random() * 6)}!`,
	"<i><b>I FREAKING LOVE AIR CONDITIONING!!!</b></i>",
	"pov \" 'use strict'; 0765 \" 💀💀💀",
	"t=0 error: this.func is not defined",
	"The welcome text printing was NOT JQUERY 0_0",
	"<i>[PAPYRUS AITALE QUOTE HERE. YOU KNOW, THE ONE WITH THE CAT?]</i>",
	"dum de dum...",
	"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
	"Spot the references in these splashtexts!",
	"<i>A TypeScript (TS) enum is a special type in TypeScript that allows you to define a set of named constants. Enums can be thought of as a collection of related values that are easier to read and maintain than plain strings or numbers. They can be used to improve the readability of your code by providing a set of clear, distinct values that can be used in place of numbers or strings.</i><br> &mdash;ChatGPT"
]

let x1 = document.getElementById('hi1');
let x2 = document.getElementById('hi2');
let info = document.getElementsByClassName('info')

await new Promise(resolve => { $(document).ready(resolve) }) // Wait for jQuery to finish activating

x2.onclick = async () => {
	await new Promise(resolve => { $(x2).fadeOut(250, resolve) })
	x2.innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))]
	$(x2).fadeIn(250)
}

globalThis.splash = function(num) {
	x2.innerHTML=splashes[num]
	return num + "/" + (splashes.length-1)
}
globalThis.splashDUMP = function(num) {
	return splashes
}

async function fadein(elem) {
	$(elem).fadeOut(0)
	$(elem).removeClass('hidden')
	await new Promise(resolve => $(elem).fadeIn(500, () => { resolve() }));
}

function delay(ms=400) {
	return new Promise(resolve=>setTimeout(resolve,ms))
}

async function printText(text, elem) {
	elem.innerText = "_"
	await delay(50)
	for (let i in text) {
		const subText = text.substr(0, i)
		elem.innerText = subText + "_"
		await delay(50)
	}
	elem.innerText = text
}

x2.innerHTML = splashes[Math.floor(Math.random() * splashes.length)]

await delay(500)

printText("Welcome!",x1)

setTimeout(() => {fadein(x2)}, 250)
setTimeout(async () => {
	for (let i = 0; i < info.length; i++) {
		fadein(info.item(i))
		await new Promise(resolve => (setTimeout(resolve, 250)))
	}
}, 1000)
