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

	// variables for images
	const figImage = document.querySelector('figure img');

	const image1 = document.getElementById('engraving');
	const image2 = document.getElementById('sealrock');
	const image3 = document.getElementById('cliffhouse');
	const image4 = document.getElementById('sunset');
	const image5 = document.getElementById('shoreline');
	const image6 = document.getElementById('dunes');
	
	// variables for shore area
	const shoreArea = document.getElementById('shorearea');
	const foggyImage = document.getElementById('foggy');

	// variables for rocks area
	const rocksArea = document.getElementById('rocksarea');
	const rosyImage = document.getElementById('rosy');

	// variables for dunes area
	const dunesArea = document.getElementById('dunesarea');
	const goldenImage = document.getElementById('golden');

	// variables for overlay
	const overlayButton = document.getElementById('overlaybutton');
	const instructions = document.getElementById('instructions');
	
	// variables for timeout functions
	let doneZooming;
	let doneViewing;

	window.addEventListener('load', function () 
	{
		alert("Hi User! Please complete these tasks:\n\n1. Hover around interesting areas in the photo\n2. Click on highlighted areas if they appear\n3. Exit zoomed view");

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

	// button on top right of page
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

	// fade in image on hovering beach div area
	shoreArea.addEventListener('mouseover', function()
	{
		console.log("shore area mouseover");
		shoreArea.style.backgroundColor = 'rgba(255, 255, 255, 0.125)';
		foggyImage.style.display = 'block';
		rosyImage.style.display = 'none';
		goldenImage.style.display = 'none';
		shoreArea.className = 'showing';
		rocksArea.className = 'hidden';
		dunesArea.className = 'hidden';
		figImage.style.opacity = '0';
	});

	// fade out image on leaving beach div area
	shoreArea.addEventListener('mouseout', function()
	{
		console.log("shore area mouseout");
		foggyImage.style.display = 'block';
		rosyImage.style.display = 'none';
		goldenImage.style.display = 'none';
	});

	// zoom on clicking beach div area
	shoreArea.addEventListener('click', function()
	{
		console.log("shore area clicked");
		shoreArea.className = 'hidden';
		foggyImage.className = 'sect2';
		figImage.className = 'sect2';

		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			// image5.className = 'showing';
		}, 3000);
	});

	// fade in image on hovering rocks div area
	rocksArea.addEventListener('mouseover', function()
	{
		console.log("rocks area mouseover");
		rocksArea.style.backgroundColor = 'rgba(255, 255, 255, 0.125)';
		foggyImage.style.display = 'none';
		rosyImage.style.display = 'block';
		goldenImage.style.display = 'none';
		shoreArea.className = 'hidden';
		rocksArea.className = 'showing';
		dunesArea.className = 'hidden';
		figImage.style.opacity = '0';
	});

	// fade out image on leaving rocks div area
	rocksArea.addEventListener('mouseout', function()
	{
		console.log("rocks area mouseout");
		foggyImage.style.display = 'none';
		rosyImage.style.display = 'block';
		goldenImage.style.display = 'none';
	});

	// zoom on clicking rocks div area
	rocksArea.addEventListener('click', function()
	{
		console.log("rocks area clicked");
		rocksArea.className = 'hidden';
		rosyImage.className = 'sect2';
		figImage.className = 'sect2';
		
		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			// image5.className = 'showing';
		}, 3000);
	});

	// fade in image on hovering dunes div area
	dunesArea.addEventListener('mouseover', function()
	{
		console.log("dunes area mouseover");
		dunesArea.style.backgroundColor = 'rgba(255, 255, 255, 0.125)';
		foggyImage.style.display = 'none';
		rosyImage.style.display = 'none';
		goldenImage.style.display = 'block';
		shoreArea.className = 'hidden';
		rocksArea.className = 'hidden';
		dunesArea.className = 'showing';
		figImage.style.opacity = '0';
	});

	// fade out image on leaving dunes div area
	dunesArea.addEventListener('mouseout', function()
	{
		console.log("dunes area mouseover");
		foggyImage.style.display = 'none';
		rosyImage.style.display = 'none';
		goldenImage.style.display = 'block';
	});

	// zoom on clicking dunes div area
	dunesArea.addEventListener('click', function()
	{
		console.log("dunes area clicked");
		dunesArea.className = 'hidden';
		goldenImage.className = 'sect2';
		figImage.className = 'sect2';

		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			// image5.className = 'showing';
		}, 3000);
	});

	// exit area content and zoom out
	document.addEventListener('keydown', function(event)
    {
        const keyPressed = event.key;
        if (keyPressed === 'Escape')
        {
			figImage.style.opacity = '1';
			figImage.className = 'sect1';
			foggyImage.className = 'sect1';
			rosyImage.className = 'sect1';
			goldenImage.className = 'sect1';
			
			
            // image5.className= "hidden";
			
			// clearTimeout(doneViewing);
			// doneViewing = setTimeout(function () 
			// {
			// 	foggyImage.className = 'sect1';
			// }, 3000);
			
			clearTimeout(doneZooming);
			doneZooming = setTimeout(function () 
			{
				shoreArea.className = 'showing';
				rocksArea.className = 'showing';
				dunesArea.className = 'showing';
				shoreArea.style.backgroundColor = 'transparent';
				rocksArea.style.backgroundColor = 'transparent';
				dunesArea.style.backgroundColor = 'transparent';
			}, 3000);	
        }
    });
})();// END IIFE