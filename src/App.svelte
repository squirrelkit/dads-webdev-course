<script>
  import svelteLogo from './assets/svelte.svg'
  import viteLogo from '/vite.svg'
  import Counter from './lib/Counter.svelte'
    import Card from './components/Card.svelte';

  let columns = [1];
  let rows = [1];
</script>

<main>

  
  <h1>Vite + Svelte</h1>

  <div class="buttons">
    <button on:click={() => rows = [...rows, 1]}>
      Add a row
    </button>
    <button on:click={() => columns = [...columns, 1]}>
      add a column
    </button>
  </div>

  <div class="card-column-wrapper">
    {#each columns as column}
    <div class="card-row-wrapper">
      {#each rows as card}
        <Card/>
      {/each}
    </div>
    {/each}

  </div>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
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
