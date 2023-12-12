<script>
	let courseDays = [
		'2023-12-09',
		'2023-12-10',
		'2023-12-11',
		'2023-12-12',
		'2023-12-13',
		'2023-12-14',
		'2023-12-15',
		'2023-12-16',
		'2023-12-17',
		'2023-12-18',
		'2023-12-19',
		'2023-12-20',
		'2023-12-21',
		'2023-12-22',
		'2023-12-23',
		'2023-12-24',
		'2023-12-25',
		'2023-12-26',
		'2023-12-27',
		'2023-12-28',
		'2023-12-29',
		'2023-12-30',
		'2023-12-31'
	];
</script>

<div class="main flex flex-col items-center justify-center">
	<div class="flex justify-center">
		<div class="flex items-center text-2x1 text-cyan-200 px-8 py-4 bg-secondary-500 rounded-xl">
			<h1>Exercises</h1>
		</div>
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
		font-family: 'quicksand', sans-serif;
		font-size: 1.2rem;
	}
</style>
