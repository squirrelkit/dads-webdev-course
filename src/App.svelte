<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Card from "./components/Card.svelte";
  import Box from "./components/Box.svelte";

  let columns = 3;
  let rows = 2;

</script>

<main>
  <h1>Kaya's app</h1>

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
          <Box />
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  .button {
    background: linear-gradient(to bottom right, #ffbbff, #fb61ff);
  }
</style>
