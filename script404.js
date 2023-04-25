import "./jquery.js";

let x1 = document.getElementById('hi1');
let x2 = document.getElementById('hi2');
let info = document.getElementsByClassName('info')

$(document).ready(function () {
	$(x1).animate({ opacity: '1' }, 1500, function () {
		$(x1).removeClass('hidden');
	});
	setTimeout(async ()=>{
		$(x2).animate({ opacity: '1' }, 1000, function () {
			$(x2).removeClass('hidden');
		});
		for (let i = 0; i < info.length; i++) {
			let x3 = info.item(i)
			$(x3).animate({ opacity: '1' }, 500, function () {
				$(x3).removeClass('hidden');
			});
			await new Promise(resolve => (setTimeout(resolve,250)))
		}
	},500)
});
