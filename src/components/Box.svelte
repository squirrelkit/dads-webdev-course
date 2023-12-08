<script>
    const randomHue = () => {
        return Math.floor(Math.random() * 360);
    }

    const randomAlpha = () => {
        return Math.random();
    }

    $: hue1 = randomHue();
    $: hue2 = randomHue();
    $: hue3 = randomHue();
    $: alpha = randomAlpha();
</script>

<div class="box flex">
    <slot {hue1} {hue2} {hue3} {alpha}/>
</div>

<style>
    .box {
        width: 100%;
        height: 100%;
    }
</style>