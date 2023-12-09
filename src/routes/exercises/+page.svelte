<script>
    let courseDays = [
        "2023-12-09",
        "2023-12-10",
        "2023-12-11",
    ];
</script>

<div class="main flex flex-col items-center justify-center">
    <div class="flex justify-center">
        <div class="flex items-center text-2x1 text-cyan-200 px-8 py-4 bg-secondary-500 rounded-xl"><h1>Exercises</h1></div>
    </div>
    <ul class="flex flex-col items-center justify-center">
        {#each courseDays as day}

        <li>
            <div class="flex"><a href="exercises/{day}">{day}</a></div>
        </li>

        {/each}
    </ul>
</div>
<style>
    li {
        padding: 1rem;
        font-family: "quicksand", sans-serif;
        font-size: 1.2rem;
    }
</style>