<script>
    let player = { x: 50, y: 50, isJumping: false };
  
    function handleKeyPress(event) {
      const step = 50; // Adjusted to move 50 pixels
  
      switch (event.key) {
        case 'ArrowUp':
          player.y = Math.max(0, player.y - step);
          break;
        case 'ArrowDown':
          player.y = Math.min(80 * window.innerHeight / 100 - 20, player.y + step); // 80% of the viewport height
          break;
        case 'ArrowLeft':
          player.x = Math.max(0, player.x - step);
          break;
        case 'ArrowRight':
          player.x = Math.min(80 * window.innerWidth / 100 - 20, player.x + step); // 80% of the viewport width
          break;
        case ' ':
          if (!player.isJumping) {
            player.isJumping = true;
            player.y -= 50; // Adjust the jump height as needed
            setTimeout(() => {
              player.y += 50; // Reset the position after the jump
              player.isJumping = false;
            }, 1000); // Adjust the duration of the jump as needed (1 second in this case)
          }
          break;
      }
    }
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
      top: 50px;
      left: 50px;
      transition: top 0.2s, left 0.2s; /* Smooth movement transition */
    }
  </style>
  
  <div class="canvas" tabindex="0" on:keydown={handleKeyPress}>
    <div class="player" style="top: {player.y}px; left: {player.x}px;"></div>
  </div>
  