<script>
	import { onMount } from 'svelte';

    onMount(() => {
        const canvas = document.getElementById('myCanvas');
        const context = canvas.getContext('2d');

        let time = 0;
        const radius = 50;
        const centerX = canvas.width / 2;
        const centerY = canvas.height / 2;

        function animate() {
            context.clearRect(0, 0, canvas.width, canvas.height);

            let x = centerX + radius * Math.cos(time);
            let y = centerY + radius * Math.sin(time);

            context.beginPath();
            context.arc(x, y, 2, 0, Math.PI * 2);
            context.fillStyle = `hsl(${time * 100}, 100%, 50%)`;
            context.fill();

            time += 0.01;
            requestAnimationFrame(animate);
            

            animate();
        }
    })
</script>

<canvas id="myCanvas"></canvas>

<style>
	canvas {
		width: 100%;
		height: 100%;
	}
</style>
