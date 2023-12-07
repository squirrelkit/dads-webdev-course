<div class="flex card-wrapper">
    <div class="image-wrapper">
        <img class="image" src="https://picsum.photos/200" alt="image" />
    </div>

    <input value={name}/>

    <div class="card-content-wrapper">
        <h1 class="text">Hello</h1>
        <p class="text">This is a paragraph</p>
    </div>
</div>

<style>
    .image-wrapper {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .flex {
        display: flex;
    }

    .card-wrapper {
        background: linear-gradient(to bottom right, #abcdef, #123456);
    }

    .card-content-wrapper {

    }

    .card {
        border: 1px solid #123456;
        background: linear-gradient(to bottom right, #abcdef, #123456);
        padding: 10px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        width: 200px;
        height: 200px;
    }

    .text {
        display: flex;
        flex-direction: column;
    }
</style>
