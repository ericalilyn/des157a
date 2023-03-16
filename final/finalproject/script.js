(function () {
	'use strict';
	
	// variables for captions
	const captions = [
		'',
		'Countless walks in the Outside Lands',
		'Endless footprints left in the sand',
		'Wandering through the waves and ruins',
		'Where the land meets its scenic end',
		'Over the hill as days turn to nights',
		'Sun sinking into golden hour light'];
	let figCaption = document.querySelector('figcaption');

	// variables for default image
	const figImage = document.querySelector('figure img');
	
	// variables for shore area
	const shoreArea = document.getElementById('shorearea');
	const foggyImage = document.getElementById('foggy');
	const engravingImage = document.getElementById('engraving');
	const shorelineImage = document.getElementById('shoreline');

	// variables for rocks area
	const rocksArea = document.getElementById('rocksarea');
	const rosyImage = document.getElementById('rosy');
	const rockImage = document.getElementById('sealrock');
	const cliffImage = document.getElementById('cliffhouse');

	// variables for dunes area
	const dunesArea = document.getElementById('dunesarea');
	const goldenImage = document.getElementById('golden');
	const dunesImage = document.getElementById('dunes');
	const sunsetImage = document.getElementById('sunset');

	// variables for UI
	const imageButton = document.getElementById('imagebutton');
	const overlayButton = document.getElementById('overlaybutton');
	const instructions = document.getElementById('instructions');
	
	 // variables for sound
	 const shoreSound = new Audio('sounds/shorearea.mp3');
	 const rocksSound = new Audio('sounds/rocksarea.mp3');
	 const dunesSound = new Audio('sounds/dunesarea.mp3');

	// variables for timeout functions
	let doneZooming;
	let changeShoreScene;
	let changeRocksScene;
	let changeDunesScene;

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

	// fade in image on hovering shore div area
	shoreArea.addEventListener('mouseover', function()
	{
		console.log("shore area mouseover");
		shoreArea.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
		foggyImage.style.display = 'block';
		rosyImage.style.display = 'none';
		goldenImage.style.display = 'none';
		shoreArea.className = 'showing';
		rocksArea.className = 'hidden';
		dunesArea.className = 'hidden';
		figImage.style.opacity = '0';
	});

	// disappear div on leaving shore div area
	shoreArea.addEventListener('mouseout', function()
	{
		console.log("shore area mouseout");
		shoreArea.style.backgroundColor = 'transparent';
	});

	// zoom on clicking shore div area & display photos
	shoreArea.addEventListener('click', function()
	{
		console.log("shore area clicked");
		shoreArea.className = 'hidden';
		foggyImage.className = 'sect2';
		figImage.className = 'sect2';

		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			imageButton.className = 'displaying';
			overlayButton.className = 'notdisplaying';
			shoreAreaScene();
		}, 4000);
	});

	// fade in image on hovering rocks div area
	rocksArea.addEventListener('mouseover', function()
	{
		console.log("rocks area mouseover");
		rocksArea.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
		foggyImage.style.display = 'none';
		rosyImage.style.display = 'block';
		goldenImage.style.display = 'none';
		shoreArea.className = 'hidden';
		rocksArea.className = 'showing';
		dunesArea.className = 'hidden';
		figImage.style.opacity = '0';
	});

	// disappear div on leaving rocks div area
	rocksArea.addEventListener('mouseout', function()
	{
		console.log("rocks area mouseout");
		rocksArea.style.backgroundColor = 'transparent';
	});

	// zoom on clicking rocks div area & display photos
	rocksArea.addEventListener('click', function()
	{
		console.log("rocks area clicked");
		rocksArea.className = 'hidden';
		rosyImage.className = 'sect3';
		figImage.className = 'sect3';
		
		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			imageButton.className = 'displaying';
			overlayButton.className = 'notdisplaying';
			rocksAreaScene();
		}, 4000);
	});

	// fade in image on hovering dunes div area
	dunesArea.addEventListener('mouseover', function()
	{
		console.log("dunes area mouseover");
		dunesArea.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
		foggyImage.style.display = 'none';
		rosyImage.style.display = 'none';
		goldenImage.style.display = 'block';
		shoreArea.className = 'hidden';
		rocksArea.className = 'hidden';
		dunesArea.className = 'showing';
		figImage.style.opacity = '0';
	});

	// disappear div on leaving dunes div area
	dunesArea.addEventListener('mouseout', function()
	{
		console.log("dunes area mouseover");
		dunesArea.style.backgroundColor = 'transparent';
	});

	// zoom on clicking dunes div area & display photos
	dunesArea.addEventListener('click', function()
	{
		console.log("dunes area clicked");
		dunesArea.className = 'hidden';
		goldenImage.className = 'sect4';
		figImage.className = 'sect4';

		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			imageButton.className = 'displaying';
			overlayButton.className = 'notdisplaying';
			dunesAreaScene();
		}, 4000);
	});

	function shoreAreaScene()
	{
		// showing shore area's first image
		engravingImage.className = 'displaying';
		figCaption.className = 'displaying';
		figCaption.innerHTML = captions[1];

		// showing shore area's second image
		clearTimeout(changeShoreScene);
		changeShoreScene = setTimeout(function () 
		{
			shorelineImage.className = 'displaying';
			figCaption.className = 'displaying';
			figCaption.innerHTML = captions[2];
		}, 4000);

		// playing shore area's sound
		shoreSound.play();
		shoreSound.loop = true;
	}

	function rocksAreaScene()
	{
		// showing rocks area's first image
		rockImage.className = 'displaying';
		figCaption.className = 'displaying';
		figCaption.innerHTML = captions[3];

		// showing rocks area's second image
		clearTimeout(changeRocksScene);
		changeRocksScene = setTimeout(function () 
		{
			cliffImage.className = 'displaying';
			figCaption.className = 'displaying';
			figCaption.innerHTML = captions[4];
		}, 4000);

		// playing rocks area's sound
		rocksSound.play();
		rocksSound.loop = true;
	}

	function dunesAreaScene()
	{
		// showing dunes area's first image
		dunesImage.className = 'displaying';
		figCaption.className = 'displaying';
		figCaption.innerHTML = captions[5];

		// showing dunes area's second image
		clearTimeout(changeRocksScene);
		changeRocksScene = setTimeout(function () 
		{
			sunsetImage.className = 'displaying';
			figCaption.className = 'displaying';
			figCaption.innerHTML = captions[6];
		}, 4000);

		// playing dunes area's sound
		dunesSound.play();
		dunesSound.loop = true;
	}

	// buttons on top right of page
	overlayButton.addEventListener('click', function()
	{
		if (instructions.className === 'hidden')
		{

			instructions.className = 'showing';
			overlayButton.innerHTML = 'x';
			document.getElementById('overlay').style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
		}
		else
		{
			instructions.className = 'hidden';
			overlayButton.innerHTML = '?';
			document.getElementById('overlay').style.backgroundColor = 'transparent';
		}
	});

	imageButton.addEventListener('click', function()
	{
		overlayButton.className = 'notdisplaying';
		closeImage();
	});

	document.addEventListener('keydown', function(event)
	{
		const keyPressed = event.key;
		if (keyPressed === 'Escape')
		{
			closeImage();
		}
	});

	// via escape key or x button
	function closeImage()
	{
		// return to default view
		figImage.style.opacity = '1';
		figImage.className = 'sect1';
		foggyImage.className = 'sect1';
		rosyImage.className = 'sect1';
		goldenImage.className = 'sect1';
		
		// exit image viewing 
		shorelineImage.className = 'notdisplaying';
		engravingImage.className = 'notdisplaying';
		rockImage.className = 'notdisplaying';
		cliffImage.className = 'notdisplaying';
		sunsetImage.className = 'notdisplaying';
		dunesImage.className = 'notdisplaying';
		
		figCaption.className = 'notdisplaying';
		imageButton.className = 'notdisplaying';
		overlayButton.className = 'displaying';
		
		shoreSound.pause();
		shoreSound.currentTime = 0;
		rocksSound.pause();
		rocksSound.currentTime = 0;
		dunesSound.pause();
		dunesSound.currentTime = 0;

		shoreArea.style.backgroundColor = 'transparent';
		rocksArea.style.backgroundColor = 'transparent';
		dunesArea.style.backgroundColor = 'transparent';
			
		clearTimeout(doneZooming);
		doneZooming = setTimeout(function () 
		{
			shoreArea.className = 'showing';
			rocksArea.className = 'showing';
			dunesArea.className = 'showing';
		}, 3000);

		clearTimeout(changeShoreScene);
		clearTimeout(changeRocksScene);
		clearTimeout(changeDunesScene);
	}
})();// END IIFE