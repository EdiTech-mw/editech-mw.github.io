import "./jquery.js";

const splashes = [
	"[object Object]",
	"[object JSON]",
	"<i><b>DO YOU LIKE MY JQUERY ANIMATIONS???</b></i>"
];

let x1 = document.getElementById('hi1');
let x2 = document.getElementById('hi2');
let info = document.getElementsByClassName('info')

x2.innerHTML = splashes[Math.floor(Math.random()*splashes.length)]

$(document).ready(function () {
	$(x1).animate({ opacity: '1' }, 1500, function () {
		$(x1).removeClass('hidden');
	});
	setTimeout(()=>{
		$(x2).animate({ opacity: '1' }, 1000, function () {
			$(x2).removeClass('hidden');
		});
	},500)
	setTimeout(async ()=>{
		for (let i = 0; i < info.length; i++) {
			let x3 = info.item(i)
			$(x3).animate({ opacity: '1' }, 500, function () {
				$(x3).removeClass('hidden');
			});
			await new Promise(resolve => (setTimeout(resolve,250)))
		}
	},1000)
});
