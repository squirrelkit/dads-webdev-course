<script>
    import { onMount } from 'svelte';
  
    let context;
  
    onMount(() => {
      const canvas = document.getElementById('test-canvas');
      context = canvas.getContext('2d');
  
      canvas.addEventListener('mousemove', function (e) {
        var cRect = canvas.getBoundingClientRect();
        var canvasX = Math.round(e.clientX - cRect.left);
        var canvasY = Math.round(e.clientY - cRect.top);
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.font = '12px Arial'; // Set the font size here
        context.fillText('X: ' + canvasX + ', Y: ' + canvasY, 10, 20);
      });
  
      return () => {
        // Cleanup event listener when component is destroyed
        canvas.removeEventListener('mousemove', handleMouseMove);
      };
    });
  </script>
  
  <style>
    #test-canvas-container {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh; /* Full height of the viewport */
    }
  
    #test-canvas {
      width: 100%; /* Full width of the container */
      height: 100%; /* Full height of the container */
      border: 2px solid white;
      image-rendering: optimizeSpeed; /* Older versions of Firefox */
      image-rendering: -moz-crisp-edges; /* Firefox */
      image-rendering: -webkit-optimize-contrast; /* Webkit (Safari/Chrome) */
      image-rendering: optimize-contrast; /* Modern browsers */
    }
  </style>
  
  <div id="test-canvas-container">
    <canvas id="test-canvas"></canvas>
  </div>
  