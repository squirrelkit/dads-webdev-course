<script>
	import { onMount } from 'svelte';

	onMount(() => {
		console.log('canvas component mounted');
		('canvas component mounted');
		sketchOnCanvas();
	});

	let width = 0;
	let height = 0;

	$: if (typeof window !== 'undefined') {
		width = window.innerWidth;
		console.log("🚀 ~ file: CanvasQuick.svelte:15 ~ width:", width)
		height = window.innerHeight;
		console.log("🚀 ~ file: CanvasQuick.svelte:17 ~ height:", height)
	}

	function sketchOnCanvas() {
		const c = document.querySelector('canvas');
		const pen = canvas.getContext('2d');

		pen.beginPath();
		pen.arc(center.x, center.y, 0, 2, Math.PI * 2);
		pen.linewidth = 2;
		pen.strokeStyle = 'pink';
		pen.stroke();
	}

	function dataChanged(data) {
		if (manager) {
			Object.assign(manager.props.data, data);
			manager.render();
		}
	}
	
</script>

<canvas bind:this={canvas} />

<style>
	/* Optionally style the canvas here */
	canvas {
		margin: auto;
		display: block;
		box-shadow: 0px 2px 12px -2px rgba(121, 25, 25, 0.15);
	}
</style>
