<script>
  import { onMount } from 'svelte';

  let player = { x: 50, y: 50, isJumping: false, velocityY: 0, velocityX: 0 };
  const gravity = 1; // Adjust the gravity strength as needed
  const jumpStrength = 15; // Adjust the jump strength as needed
  const horizontalStep = 5; // Adjusted to move 5 pixels horizontally

  const platforms = [
    { x: 150, y: 300, width: 100, height: 10 },
    { x: 300, y: 350, width: 150, height: 10 },
    { x: 500, y: 400, width: 100, height: 10 },
    { x: 650, y: 450, width: 120, height: 10 },
    { x: 800, y: 500, width: 90, height: 10 },
  ];

  function updatePlayer() {
    player.velocityY += gravity;

    player.y = Math.min(89 * window.innerHeight / 100 - 20, player.y + player.velocityY);

    if (player.y === 80 * window.innerHeight / 100 - 20) {
      player.isJumping = false;
    }

    player.y = Math.max(0, player.y);

    platforms.forEach(platform => {
      if (
        player.x < platform.x + platform.width &&
        player.x + 20 > platform.x &&
        player.y + 20 > platform.y &&
        player.y < platform.y + platform.height
      ) {
        const gravity = 0;
        player.velocityY = 0;

        player.y = platform.y - 20;
      }
    });

    player.x += player.velocityX;

    // Adjust the right boundary calculation
    player.x = Math.max(0, Math.min(window.innerWidth - 20, player.x));
  }

  function handleKeyPress(event) {
    switch (event.key) {
      case 'ArrowUp':
        player.isJumping = true;
        const gravity = 1;
        player.velocityY = -jumpStrength;
        break;
      case 'ArrowDown':
        player.y = Math.min(80 * window.innerHeight / 100 - 20, player.y + horizontalStep);
        break;
      case 'ArrowLeft':
        player.velocityX = -horizontalStep;
        break;
      case 'ArrowRight':
        player.velocityX = horizontalStep;
        break;
    }
  }

  function handleKeyRelease(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      player.velocityX = 0;
    }
  }

  function updateGame() {
    updatePlayer();
    requestAnimationFrame(updateGame);
  }

  onMount(() => {
    updateGame();
  });
</script>

<style>
  body, html {
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
    position: absolute;
    top: 5rem;
    left: 0;
    
  }
  

  .player {
    width: 20px;
    height: 20px;
    background-color: green;
    border-radius: 50%;
    position: absolute;
    transition: top 0.2s, left 0.2s;
  }

  .platform {
    background-color: #333;
    position: absolute;
  }
</style>

<div class="canvas" tabindex="0" on:keydown={handleKeyPress} on:keyup={handleKeyRelease}>
  {#each platforms as platform (platform.x)}
    <div class="platform" style="top: {platform.y}px; left: {platform.x}px; width: {platform.width}px; height: {platform.height}px;"></div>
  {/each}
  <div class="player" style="top: {player.y}px; left: {player.x}px;"></div>
</div>
