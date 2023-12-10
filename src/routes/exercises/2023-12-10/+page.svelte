<script>
    import { Canvas, Layer } from 'svelte-canvas';

    import Orbit2 from './Orbit2.svelte';
  
    const render = ({ context, width, height }) => {
     context.beginPath();
     context.arc(width / 2, height / 2, 100, 0, Math.PI * 2);
     context.strokeStyle = 'pink';
     context.fillStyle = 'blue';
     context.lineWidth = 5;
     context.fill();
     context.stroke();

    };
  </script>
  
  <Canvas autoplay>
    <Layer {render} />
  </Canvas>
  