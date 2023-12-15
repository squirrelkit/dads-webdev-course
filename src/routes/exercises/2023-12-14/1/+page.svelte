<!-- <script>
    const hexes = [
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8",
      // ... Add more hexes as needed
    ];
  
    let numRows = 15; // Adjust the number of rows as needed
    let numCols = 8; // Adjust the number of columns as needed
  
    // Group hexes into rows with every other row offset
    let rows = Array.from({ length: numRows }, (_, i) => {
      const isOffsetRow = i % 2 === 1;
      const offset = isOffsetRow ? 0.5 : 0;
      return hexes.slice(i * numCols, (i + 1) * numCols).map(hex => ({ hex, offset }));
    }).flat();
  </script>
  
  <style>
    .board {
      display: grid;
      grid-template-columns: repeat(8, 4rem);
      grid-template-rows: repeat(15, 4.5rem);
      grid-gap: 0.5rem;
      justify-content: center;
    }
  
    .hex {
      width: 4rem;
      height: 4.5rem;
      background-color: #ccc;
      clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      margin-left: {offset * 2.5rem};
    }
  </style>
  
  <div class="board">
    {#each rows as { hex, offset } (hex)}
      <div class="hex" style="margin-left: {offset * 2.5rem}">{hex}</div>
    {/each}
  </div>
   -->