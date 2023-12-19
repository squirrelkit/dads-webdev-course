<script>
	import { onMount } from 'svelte';

	let canvas;
	let context;
	let squareX = 0;
	let squareY = 0;
	let targetX = 0;
	let targetY = 0;

	const movementSpeed = 4;
	let isTouchingBorder = false;

	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);
		const squareSize = 25;

		context.beginPath();
		context.rect(squareX, squareY, squareSize, squareSize);

		// Set the color based on whether the square is touching the border
		const color = isTouchingBorder ? 'red' : 'blue';

		context.fillStyle = color;
		context.fill();
	}

	onMount(() => {
		if (mazeData && mazeData.length > 0 && mazeData[0]) {
			mazeStyle = `
      grid-template-columns: repeat(${mazeData[0].length}, 20px);
      grid-template-rows: repeat(${mazeData.length}, 20px);
    `;
		}

		window.addEventListener('keydown', (event) => {
			const { key } = event;
			movePlayer(key);
		});
	});

	function update() {
		squareX += (targetX - squareX) / movementSpeed;
		squareY += (targetY - squareY) / movementSpeed;

		draw();

		if (Math.abs(squareX - targetX) > 0.1 || Math.abs(squareY - targetY) > 0.1) {
			requestAnimationFrame(update);
		}
	}

	onMount(() => {
		canvas = document.getElementById('test-canvas');
		context = canvas.getContext('2d');
		draw();
		window.addEventListener('keydown', handleKeyDown);

		return () => {
			window.removeEventListener('keydown', handleKeyDown);
		};
	});

	function handleKeyDown(event) {
		if (event.key === 'ArrowRight') {
			targetX = Math.min(canvas.width - 25, squareX + 20);
		} else if (event.key === 'ArrowLeft') {
			targetX = Math.max(0, squareX - 20);
		} else if (event.key === 'ArrowDown') {
			targetY = Math.min(canvas.height - 25, squareY + 20);
		} else if (event.key === 'ArrowUp') {
			targetY = Math.max(0, squareY - 20);
		}

		// Check if the square is touching the border after the update
		isTouchingBorder = checkTouchingBorder();

		update(); // Start the smooth transition
	}

	function checkTouchingBorder() {
		const squareSize = 25;
		return (
			squareX <= 0 ||
			squareX + squareSize >= canvas.width ||
			squareY <= 0 ||
			squareY + squareSize >= canvas.height
		);
	}
</script>

<div id="test-canvas-container">
	<canvas id="test-canvas"></canvas>
</div>

<style>
	#test-canvas-container {
		display: flex;
		align-items: center;
		justify-content: center;
		height: 100vh;
	}

	#test-canvas {
		width: 90rem;
		height: 50rem;
		border: 6px solid wheat;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		background: white;
	}
</style>
