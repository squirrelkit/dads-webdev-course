<script>
	import { onMount } from 'svelte';
	import { Pane } from 'tweakpane';

	let PARAMS = {
		gravity: 1,
		jumpStrength: 15,
		horizontalStep: 5
	};

	let gravity = 1;
  let jumpStrength = 15;
  let horizontalStep = 5;

	$: console.log("🚀 ~ file: Platformer.svelte:12 ~ gravity, jumpStrength, horizontalStep:", gravity, jumpStrength, horizontalStep)
let gravityPane, jumpStrengthPane, horizontalStepPane;

	onMount(() => {
		const pane = new Pane();

		gravityPane = pane.addBinding(PARAMS, 'gravity');

		gravityPane.on('change', function (ev) {
			gravity = ev.value;
		});

		jumpStrengthPane = pane.addBinding(PARAMS, 'jumpStrength');

		jumpStrengthPane.on('change', function (ev) {
      jumpStrength = ev.value;
		});

		horizontalStepPane = pane.addBinding(PARAMS, 'horizontalStep');

		horizontalStepPane.on('change', function (ev) {
      horizontalStep = ev.value;
		});

		// Create coins for each platform
		platforms.forEach((platform) => {
			for (let i = 0; i < platform.coins; i++) {
				coins.push({ x: platform.x + i * 25, y: platform.y - 30, size: 20 });
			}
		});

		updateGame();
    // updatePlayer();
	});

	let player = { x: 50, y: 50, isJumping: false, velocityY: 0, velocityX: 0 };
	const platforms = [
		{ x: 150, y: 300, width: 100, height: 10, coins: 3 },
		{ x: 300, y: 350, width: 150, height: 10, coins: 5 },
		{ x: 500, y: 400, width: 100, height: 10, coins: 2 },
		{ x: 650, y: 450, width: 120, height: 10, coins: 4 },
		{ x: 800, y: 500, width: 90, height: 10, coins: 1 }
	];
	const coins = [];

	function updatePlayer() {
		player.velocityY += gravity;
		console.log("🚀 ~ file: Platformer.svelte:56 ~ updatePlayer ~ gravity:", gravity)
		console.log("🚀 ~ file: Platformer.svelte:56 ~ updatePlayer ~ player:", player)
		player.y = Math.min((89 * window.innerHeight) / 100 - 20, player.y + player.velocityY);
		console.log("🚀 ~ file: Platformer.svelte:59 ~ updatePlayer ~ window:", window)
		if (player.y === (80 * window.innerHeight) / 100 - 20) {
			player.isJumping = false;
		}
		player.y = Math.max(0, player.y);
		platforms.forEach((platform) => {
			if (
				player.x < platform.x + platform.width &&
				player.x + 20 > platform.x &&
				player.y + 20 > platform.y &&
				player.y < platform.y + platform.height
			) {
				gravity = 0;
				player.velocityY = 0;
				player.y = platform.y - 20;
			}
		});
		player.x += player.velocityX;
		// Adjust the right boundary calculation
		player.x = Math.max(0, Math.min(window.innerWidth - 20, player.x));
	}

	function handleKeyPress(event) {
		console.log("🚀 ~ file: Platformer.svelte:79 ~ handleKeyPress ~ event:", event)
		switch (event.key) {
			case 'ArrowUp':
			case 'w':
				player.isJumping = true;
				gravity = 1;
				player.velocityY = -jumpStrength;
				break;
			case 'ArrowDown':
			case 's':
				player.y = Math.min((80 * window.innerHeight) / 100 - 20, player.y + horizontalStep);
				break;
			case 'ArrowLeft':
			case 'a':
				player.velocityX = -horizontalStep;
				break;
			case 'ArrowRight':
			case 'd':
				player.velocityX = horizontalStep;
				break;
		}
	}

	function handleKeyRelease(event) {
		if (
			event.key === 'ArrowLeft' ||
			event.key === 'ArrowRight' ||
			event.key === 'a' ||
			event.key === 'd'
		) {
			player.velocityX = 0;
		}
	}

	function updateGame() {
		updatePlayer();
		requestAnimationFrame(updateGame);
	}
</script>

<div class="canvas" tabindex="0" on:keydown={handleKeyPress} on:keyup={handleKeyRelease}>
	{#each platforms as platform (platform.x)}
		<div
			class="platform"
			style="top: {platform.y}px; left: {platform.x}px; width: {platform.width}px; height: {platform.height}px;"
		></div>
	{/each}

	{#each coins as coin (coin)}
		<div class="coin" style="top: {coin.y}px; left: {coin.x}px;"></div>
	{/each}

	<div class="player" style="top: {player.y}px; left: {player.x}px;"></div>
</div>

<footer></footer>

<style>
	:global(.tp-dfwv) {
		position: absolute;
		top: 6rem !important;
		right: 6rem !important;
		width: 256px;
	}
	body,
	html {
		height: 100%;
		margin: 0;
		padding: 0;
		overflow: hidden;
	}
	.canvas {
		width: 100vw;
		height: 100vh;
		border: 1px solid #000;
		background: linear-gradient(to bottom right, red, orange);
		background: linear-gradient(to bottom right, #ff6262, #fbc05c);
		position: absolute;
		top: 5rem;
		left: 0;
	}

	.player {
		width: 20px;
		height: 20px;
		background-color: green;
		background: linear-gradient(to bottom, #0000ff, #5e5eff);
		border-radius: 50%;
		position: absolute;
		transition:
			top 0.2s,
			left 0.2s;
	}
	.platform {
		background-color: #333;
		position: absolute;
	}

	footer {
		background: #30b530;
		height: 1rem;
		width: 100%;
		position: absolute;
		bottom: 0;
		left: 0;
	}

	.coin {
		width: 20px;
		height: 20px;
		background-color: yellow;
		border-radius: 50%;
		position: absolute;
	}
</style>
