<script>
    import { onMount } from 'svelte';
  
    let mazeData = [
      '####################',
      '#S#                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '# #                #',
      '#                  #',
      '###################E'
    ];
  
    let playerTop = 20;
    let playerLeft = 20;
  
    function movePlayer(direction) {
      console.log("🚀 ~ file: MazeGame.svelte:30 ~ movePlayer ~ direction:", direction)
      switch (direction) {
        case 'up':
          playerTop -= 10;
          break;
        case 'down':
          playerTop += 10;
          break;
        case 'left':
          playerLeft -= 10;
          break;
        case 'right':
          playerLeft += 10;
          break;
      }

      let player = document.getElementById('player');
      player.style.top = playerTop + 'px';
      player.style.left = playerLeft + 'px';
  
      checkCollision();
    }

    
  
    function checkCollision() {
      const playerRow = Math.floor(playerTop / 20);
      const playerCol = Math.floor(playerLeft / 20);
      const newCell = mazeData[playerRow][playerCol];
  
      if (newCell === '#') {
        // Undo the move if it collides with a wall
        switch (direction) {
          case 'up':
            playerTop += 10;
            break;
          case 'down':
            playerTop -= 10;
            break;
          case 'left':
            playerLeft += 10;
            break;
          case 'right':
            playerLeft -= 10;
            break;
        }
      }
  
      if (newCell === 'E') {
        alert('Congratulations! You reached the exit!');
        resetGame();
      }
    }
  
    function resetGame() {
      playerTop = 20;
      playerLeft = 20;
    }
  
    let mazeStyle = '';
    onMount(() => {
      mazeStyle = `
        grid-template-columns: repeat(${mazeData[0].length}, 20px);
        grid-template-rows: repeat(${mazeData.length}, 20px);
      `;

      window.addEventListener('keydown', (event) => {
        const { key } = event;
        console.log("🚀 ~ file: MazeGame.svelte:94 ~ window.addEventListener ~ event:", event)
        console.log("🚀 ~ file: MazeGame.svelte:94 ~ window.addEventListener ~ key:", key)
        
      })
    });
  </script>
  
  <style>
    #maze {
      display: grid;
      gap: 1px;
      border: 1px solid black;
      background-color: white;
      position: relative;
      width: 400px;
      height: 400px;
      grid-template-columns: repeat(21, 20px);
      grid-template-rows: repeat(20, 20px);
    }
  
    .cell {
      width: 20px;
      height: 20px;
    }
  
    .wall {
      background-color: black;
    }
  
    #player {
      background-color: green;
      width: 20px;
      height: 20px;
      position: absolute;
      top: 10px;
      left: 10px;
    }
  </style>
  
  <div id="maze" style={mazeStyle}>
    {#each mazeData as row, rowIndex}
      {#each row as cell, colIndex}
        <div
          class="cell"
          class:wall={cell === '#'}
        ></div>
      {/each}
    {/each}
  
    <div id="player" on:keydown={(event) => movePlayer(event.key)}></div>
  </div>
  