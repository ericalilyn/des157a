(function () {
	'use strict';
	
	// const captions = [
	// 	'',
	// 	'',
	// 	'',
	// 	'',
	// 	'',
	// 	''];

	// let figCaption = document.querySelector('figcaption');
	// figCaption.innerHTML = captions[1];

	const overlayButton = document.getElementById('overlaybutton');
	const instructions = document.getElementById('instructions');

	const image1 = document.getElementById('engraving');
	const image2 = document.getElementById('sealrock');
	const image3 = document.getElementById('cliffhouse');
	const image4 = document.getElementById('sunset');
	const image5 = document.getElementById('shoreline');
	const image6 = document.getElementById('dunes');
	
	let counter = 0;

	window.addEventListener('load', function () 
	{
		// fade out div then set it to display none
		const preloader = document.getElementById('preloader');
		const loadText = document.getElementById('loadtext');
		preloader.className = 'bgfade';
		loadText.className = 'textfade';

		preloader.addEventListener('animationend', function ()
		{
			preloader.style.display = 'none';
			console.log('fadeout completed');
		});
	}); // end window load function

	// info button on top right of page
	overlayButton.addEventListener('click', function()
	{
		if (instructions.className === 'hidden')
		{
			instructions.className = 'showing';
			overlayButton.innerHTML = 'x';
		}
		else
		{
			instructions.className = 'hidden';
			overlayButton.innerHTML = 'i';
		}
	});

	// window.addEventListener('click', function()
	// {
	// 	counter++;

	// 	if (counter === 2)
	// 	{
	// 		console.log("image 1 showing");
	// 		image1.className = 'showing';
	// 	}
	// 	else if (counter === 4)
	// 	{
	// 		console.log("image 2 showing");
	// 		image2.className = 'showing';
	// 	}
	// 	else if (counter === 6)
	// 	{
	// 		console.log("image 3 showing");
	// 		image3.className = 'showing';
	// 	}
	// 	else if (counter === 8)
	// 	{
	// 		console.log("image 4 showing");
	// 		image4.className = 'showing';
	// 	}
	// 	else if (counter === 10)
	// 	{
	// 		console.log("image 5 showing");
	// 		image5.className = 'showing';
	// 	}
	// 	else if (counter === 12)
	// 	{
	// 		console.log("image 6 showing");
	// 		image6.className = 'showing';
	// 	}
	// 	else
	// 	{
	// 		image1.className = 'hidden';
	// 		image2.className = 'hidden';
	// 		image3.className = 'hidden';
	// 		image4.className = 'hidden';
	// 		image5.className = 'hidden';
	// 		image6.className = 'hidden';
	// 	}	
	// });
})();// END IIFE