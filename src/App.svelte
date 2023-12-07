<script>
  import svelteLogo from "./assets/svelte.svg";
  import viteLogo from "/vite.svg";
  import Counter from "./lib/Counter.svelte";
  import Card from "./components/Card.svelte";

  let columns = 2;
  let rows = 3;

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
          <Card />
        {/each}
      </div>
    {/each}
  </div>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  .button {
    background: linear-gradient(to bottom right, #ffbbff, #fb61ff);
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
