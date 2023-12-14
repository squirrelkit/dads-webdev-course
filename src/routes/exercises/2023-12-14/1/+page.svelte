<!-- HexGrid.svelte -->
<style>
    .grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
  
    .hexagon {
      width: 100px;
      height: 100px;
      background-color: #ff0000;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      margin: 5px;
    }
  </style>
  
  <script>
    let hexGrid = [
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [1, 1, 1, 1],
      [1, 1, 1, 1, 1]
    ];
  </script>
  
  <div class="grid">
    {#each hexGrid as row}
      {#each row as cell}
        <div class="hexagon"></div>
      {/each}
    {/each}
  </div>