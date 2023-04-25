import "./jquery.js";

const splashes = [
	"[object Object]",
	"[object JSON]",
	"<i><b>DO YOU LIKE MY JQUERY ANIMATIONS???</b></i>",
	"Note to juan: Pale moon is ancient and doesn't like new stuff!",
	`DIE! <i>throws die...</i> a ${Math.round(Math.random() * 6)}!`,
]

let x1 = document.getElementById('hi1');
let x2 = document.getElementById('hi2');
let info = document.getElementsByClassName('info')

await new Promise(resolve => { $(document).ready(resolve) }) // Wait for jQuery to finish activating

x2.onclick = async () => {
	await new Promise(resolve => { $(x2).animate({ opacity: '0' }, 250, "swing", resolve) })
	x2.innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))]
	$(x2).animate({ opacity: '1' }, 250, "swing")
}

x2.innerHTML = splashes[Math.round(Math.random() * (splashes.length - 1))]

$(x1).animate({ opacity: '1' }, 1500, function () {
	$(x1).removeClass('hidden');
});
setTimeout(() => {
	$(x2).animate({ opacity: '1' }, 1000, function () {
		$(x2).removeClass('hidden');
	});
}, 500)
setTimeout(async () => {
	for (let i = 0; i < info.length; i++) {
		let x3 = info.item(i)
		$(x3).animate({ opacity: '1' }, 500, function () {
			$(x3).removeClass('hidden');
		});
		await new Promise(resolve => (setTimeout(resolve, 250)))
	}
}, 1000)
