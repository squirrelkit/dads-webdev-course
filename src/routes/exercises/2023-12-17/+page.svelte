<script>
	import { onMount } from 'svelte';
	let canvas;
	let context;
	$: squareX = 0;
	$: squareY = 0;
	$: targetX = 0;
	$: targetY = 0;

	const movementDistance = 5;
	function draw() {
		context.clearRect(0, 0, canvas.width, canvas.height);

		const squareSize = 25;

		// Update square position with a fixed speed for consistent movement
		squareX = moveWithinBounds(squareX, targetX, movementDistance, 0, canvas.width);
		squareY = moveWithinBounds(squareY, targetY, movementDistance, 0, canvas.height);

		context.beginPath();
		context.rect(squareX, squareY, squareSize, squareSize);
		context.fillStyle = 'blue';
		context.fill();
	}

	onMount(() => {
		canvas = document.getElementById('test-canvas');
		context = canvas.getContext('2d');

		draw();

		window.addEventListener('keydown', handleKeyDown);

		return () => {};
	});

	function moveWithinBounds(current, target, speed, min, max) {
		if (current < target) {
			return Math.min(current + speed, max);
		} else {
			return Math.max(current - speed, min);
		}
	}

	function handleKeyDown(event) {
		if (event.key === 'ArrowRight') {
			targetX = Math.min(canvas.width - 25, targetX + movementDistance);
		} else if (event.key === 'ArrowLeft') {
			targetX = Math.max(0, targetX - movementDistance);
		} else if (event.key === 'ArrowDown') {
			targetY = Math.min(canvas.height - 25, targetY + movementDistance);
		} else if (event.key === 'ArrowUp') {
			targetY = Math.max(0, targetY - movementDistance);
		}
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
