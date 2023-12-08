<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Card from "./components/Card.svelte";
  import Box from "./components/Box.svelte";

  let columns = 26;
  let rows = 24;
</script>

<main>
  <h1>Kaya's app</h1>
  
  <div>
    <div class="num-of-col-row-button">Columns: {columns}</div>
    <div class="num-of-col-row-button">Rows: {rows}</div>
  </div>

  <div class="buttons">
    <button class="button" on:click={() => (rows = rows + 1)}> Add row </button>
    <button class="button" on:click={() => (columns = columns + 1)}>
      Add column
    </button>
  </div>

  <div class="buttons">
    <button class="button" on:click={() => (rows = rows - 1)}>
      Remove row
    </button>
    <button class="button" on:click={() => (columns = columns - 1)}>
      Remove column
    </button>
  </div>


  <div class="card-column-wrapper">
    {#each Array(columns) as column}
      <div class="card-row-wrapper">
        {#each Array(rows) as card}
          <Box let:hue1 let:hue2 let:hue3 let:alpha>
            <div
              class="box-color"
              style="background: linear-gradient({hue3}deg, hsla({hue1}, 50%, 50%, {alpha}), hsla({hue2}, 50%, 50%, .5) 100%);"
            ></div>
          </Box>
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  .button {
    background: linear-gradient(to bottom right, #ffbbff, #fb61ff);
  }

  .box-color {
    flex: 1;
  }

  .num-of-col-row-button {
    background: linear-gradient(to bottom right, #cccccc, #eeeeee, ffffff);

  }
</style>
