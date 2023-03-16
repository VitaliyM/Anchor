// (function(){
// 	var head = document.querySelector('.head_block');
// 	var getSize = getComputedStyle(head);
// 	var cowBlock = document.querySelector('.cow');

// 	window.addEventListener('scroll', function () {
// 		var topPoint = window.pageYOffset + 'px';
// 		// console.log("Прокручено " + topPoint);
// 		if(getSize.height >= topPoint) {
// 			console.log("getSize = " + getSize.height);
// 		 	cowBlock.style.backgroundAttachment = 'scroll';
// 		 	console.log("topPoint = " + topPoint);
// 		 } else {
// 		 	cowBlock.style.backgroundAttachment = 'fixed';
// 		 	// console.log('Goodbay');
// 		 } 
// 	})
// })();