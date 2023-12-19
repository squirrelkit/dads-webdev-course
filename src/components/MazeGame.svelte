<script>
    import { onMount } from 'svelte';
  
    let player = { x: 50, y: 50, isJumping: false, velocityY: 0 };
    const gravity = 1; // Adjust the gravity strength as needed
    const jumpStrength = 25; // Adjust the jump strength as needed
    const horizontalStep = 50; // Adjusted to move 10 pixels horizontally
  
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
          player.x = Math.max(0, player.x - horizontalStep);
          break;
        case 'ArrowRight':
          // Move right
          player.x = Math.min(window.innerWidth - 20, player.x + horizontalStep);
          break;
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
  </style>
  
  <div class="canvas" tabindex="0" on:keydown={handleKeyPress}>
    <div class="player" style="top: {player.y}px; left: {player.x}px;"></div>
  </div>
  