<script>
    import AnimatatedBackground from "./AnimatatedBackground.svelte";
import Footer from "./Footer.svelte";
import Sidenav from "./Sidenav.svelte";
import Topnav from "./Topnav.svelte";

</script>
<div class="layout-item" id="topnav"><Topnav/></div>

<div class="layout-item" id="sidenav"><Sidenav/></div>

<div class="layout-item" id="footer"><Footer/></div>

<div class="layout-item" id="main">
    <slot/>
</div>

<div class="layout-item" id="animatated-background"><AnimatatedBackground/></div>

<style>
    :global(#app) {
        width: 100vw;
        height: 100vh;
        display: grid;
        grid-template-areas: 
        "topnav topnav topnav"
        "sidenav main main"
        "footer footer footer";
        grid-template-columns: 200px 1fr;
        grid-template-rows: 50px 1fr 50px;
    }

    #topnav {
        grid-area: topnav;
        background: deeppink;
    }

    #sidenav {
        grid-area: sidenav;
        background: blue;
    }

    #footer {
        grid-area: footer;
        background: deepskyblue;
    }
    
    .layout-item {
        display: grid;
    }
</style>