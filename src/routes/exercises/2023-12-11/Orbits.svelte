<!-- <script>
	const sun = new Image();
	const moon = new Image();
	const earth = new Image();
	function init() {
		(sun.src = 'canvas_sun.png'),
		(moon.src = 'canvas_moon.png'),
		(earth.src = 'canvas_earth.png'),
			window.requestAnimationFrame(draw),
			function draw() {
				const pen = document.getElementById('canvas').getContext('2d');

				pen.globalCompositeOperation = 'destination-over';
				pen.clearRect(0, 0, 300, 300); // clear canvas

				pen.fillStyle = 'rgba(0, 0, 0, 0.4)';
				pen.strokeStyle = 'rgba(0, 153, 255, 0.4)';
				pen.save();
				pen.translate(150, 150);

				// Earth
				const time = new Date();
				pen.rotate(
					((2 * Math.PI) / 60) * time.getSeconds() +
						((2 * Math.PI) / 60000) * time.getMilliseconds()
				);
				pen.translate(105, 0);
				pen.fillRect(0, -12, 40, 24); // Shadow
				pen.drawImage(earth, -12, -12);

				// Moon
				pen.save();
				pen.rotate(
					((2 * Math.PI) / 6) * time.getSeconds() + ((2 * Math.PI) / 6000) * time.getMilliseconds()
				);
				pen.translate(0, 28.5);
				pen.drawImage(moon, -3.5, -3.5);
				pen.restore();

				pen.restore();

				pen.beginPath();
				pen.arc(150, 150, 105, 0, Math.PI * 2, false); // Earth orbit
				pen.stroke();

				pen.drawImage(sun, 0, 0, 300, 300);

				window.requestAnimationFrame(draw);
			};
	}

	init();
</script> -->
