<script>
    import { onMount } from 'svelte';
  
    let player = { x: 50, y: 50, isJumping: false, velocityY: 0, velocityX: 0 };
    let gravity = 1; // Adjust the gravity strength as needed
    const jumpStrength = 25; // Adjust the jump strength as needed
    const horizontalStep = 5; // Adjusted to move 5 pixels horizontally
  
    const platforms = [
      { x: 150, y: 200, width: 100, height: 10, gravity: 0.5 }, // Example platform 1
      { x: 300, y: 300, width: 150, height: 10, gravity: 1.5 }, // Example platform 2
      { x: 500, y: 150, width: 100, height: 10, gravity: 0.8 }, // Additional platform 3
      { x: 650, y: 250, width: 120, height: 10, gravity: 1.2 }, // Additional platform 4
      { x: 800, y: 500, width: 90, height: 10, gravity: 0.7 }, // Additional platform 5
      // Add more platforms as needed
    ];
  
    function updatePlayer() {
      // Apply gravity to the player's velocity
      player.velocityY += gravity;
  
      // Update the player's position based on the velocity
      player.y = Math.min(80 * window.innerHeight / 100 - 20, player.y + player.velocityY);
  
      // Check if the player is on the ground and reset the isJumping flag
      if (player.y === 80 * window.innerHeight / 100 - 20) {
        player.isJumping = false;
      }
  
      // Keep the player within the canvas boundaries
      player.y = Math.max(0, player.y);
  
      // Check for collision with platforms
      platforms.forEach(platform => {
        if (
          player.x < platform.x + platform.width &&
          player.x + 20 > platform.x &&
          player.y + 20 > platform.y &&
          player.y < platform.y + platform.height
        ) {
          // Player is in contact with the platform, adjust gravity and stop falling
          gravity = platform.gravity;
          player.velocityY = 0;
  
          // Ensure the player is on top of the platform
          player.y = platform.y - 20;
        }
      });
  
      // Update the player's horizontal position based on the step
      player.x += player.velocityX;
      // Keep the player within the canvas boundaries horizontally
      player.x = Math.max(0, Math.min(window.innerWidth - 20, player.x));
    }
  
    function handleKeyPress(event) {
      switch (event.key) {
        case 'ArrowUp':
          // Jump logic remains the same
          if (!player.isJumping) {
            player.isJumping = true;
            player.velocityY = -jumpStrength;
          }
          break;
        case 'ArrowDown':
          // Adjusted to move vertically
          player.y = Math.min(80 * window.innerHeight / 100 - 20, player.y + horizontalStep);
          break;
        case 'ArrowLeft':
          // Move left
          player.velocityX = -horizontalStep;
          break;
        case 'ArrowRight':
          // Move right
          player.velocityX = horizontalStep;
          break;
      }
    }
  
    function handleKeyRelease(event) {
      // Stop horizontal movement when arrow key is released
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        player.velocityX = 0;
      }
    }
  
    function updateGame() {
      updatePlayer();
      requestAnimationFrame(updateGame);
    }
  
    onMount(() => {
      // Start the game loop when the component is mounted
      updateGame();
    });
  </script>
  
  <style>
    body {
      margin: 0;
      overflow: hidden;
    }
  
    .canvas {
      width: 80vw; /* 80% of the viewport width */
      height: 80vh; /* 80% of the viewport height */
      border: 1px solid #000;
      background: linear-gradient(to bottom right, red, orange);
      position: absolute;
      top: 10vh; /* 10% of the viewport height from the top */
      left: 10vw; /* 10% of the viewport width from the left */
    }
  
    .player {
      width: 20px;
      height: 20px;
      background-color: green;
      border-radius: 50%; /* Make it a perfect circle */
      position: absolute;
      transition: top 0.2s, left 0.2s; /* Smooth movement transition */
    }
  
    .platform {
      background-color: #333; /* Dark color for platforms */
      position: absolute;
    }
  </style>
  
  <div class="canvas" tabindex="0" on:keydown={handleKeyPress} on:keyup={handleKeyRelease}>
    {#each platforms as platform (platform.x)}
      <div class="platform" style="top: {platform.y}px; left: {platform.x}px; width: {platform.width}px; height: {platform.height}px;"></div>
    {/each}
    <div class="player" style="top: {player.y}px; left: {player.x}px;"></div>
  </div>
  