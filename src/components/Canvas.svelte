<script>
	import { onMount } from 'svelte';
	let canvas;
	let context;
	$:  squareX = 0;
	$:  squareY = 0;
	$:  targetX = 0;
	$:  targetY = 0;

	const movementSpeed = 5; // Adjust this value for the desired movement speed

    
            function draw() {
                context.clearRect(0, 0, canvas.width, canvas.height);
    
                const squareSize = 25;
    
                // Update square position with a fixed speed for consistent movement
                squareX = moveWithinBounds(squareX, targetX, movementSpeed, 0, canvas.width);
                squareY = moveWithinBounds(squareY, targetY, movementSpeed, 0, canvas.height);
                context.save();
                // Update color
                context.fillStyle = 'green';
                context.fillRect(squareX, squareY, squareSize, squareSize);
                context.restore();
                requestAnimationFrame(draw);
            }
	onMount(() => {
		canvas = document.getElementById('test-canvas');
		context = canvas.getContext('2d');

		draw(context);

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
		border: 2px solid white;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
</style>
