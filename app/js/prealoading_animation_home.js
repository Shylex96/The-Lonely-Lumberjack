// ---------------- Preloading: ---------------- \\

	// This function will be executed on web page after the page has finished loading.
	window.onload = function() {
		// Get element div "splash".
		let splash = document.getElementById("splash");
	
		// Show "splash" div for 3s using "setTimeout" function.
		setTimeout(function() {
			splash.style.display = "none";
		}, 3000);
	
		// Reduce opacity by 20% in 2s over "splash" div. 
		let opacity = 1;
		let fadeOutInterval = setInterval(function() {
			opacity -= 0.2;
			splash.style.opacity = opacity;
			// If opacity reach 0 value, interval stops.
			if (opacity <= 0) {
			clearInterval(fadeOutInterval);
			// Splash disapear and webpage is visible now.
			splash.style.display = "none";
			}
		}, 2000);

		// ---------------- Preloading: Animación de carga (puntos) ---------------- \\

		// Countdown initialized to 0.
		let count = 0;
		let visible = true;

		// Dots animation using toggle functions.
		function toggle() {
			count++;
			visible = !visible;
			const dot = document.getElementById("dotsLoading");
			dot.style.display = visible ? "inline" : "none";
			// It execute 6 times in 500ms interval.
			if (count < 6) {
			setTimeout(toggle, 500);
			}
		}
	toggle();
	};

		// ---------------- Preloading: Scroll enable/disable ---------------- \\
	
		// Disable scrollY by default.
		let body = document.body;
		body.style.overflowY = "hidden";

		// Enable after 3s.
		setTimeout(function() {
			body.style.overflowY = "scroll";
		}, 3000);