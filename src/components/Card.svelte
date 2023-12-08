<script>
    import { LoremIpsum } from "lorem-ipsum";

    function generateLoremIpsum(val) {
        const lorem = new LoremIpsum({
            sentencesPerParagraph: {
                max: 8,
                min: 4,
            },
            wordsPerSentence: {
                max: 16,
                min: 4,
            },
        });

        if (val === "title") {
            return lorem.generateWords(1);
        } else {
            return lorem.generateWords(8);
        }
    }

    $: title = generateLoremIpsum("title");
    $: description = generateLoremIpsum();
</script>

<div class="flex card-wrapper">
    <div class="image-wrapper">
        <img
            class="image"
            src="https://picsum.photos/200?t={Math.random()}"
            alt="image"
        />
    </div>

    <div class="card-content-wrapper">
        <h1 class="text">{title}</h1>
        <p class="text">{description}</p>
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
        width: 100%;
    }

    .card-wrapper {
        background: linear-gradient(to bottom right, #ffbbf0, #fb618b);
    }

    .card-content-wrapper {
    }

    .card {
        border: 1px solid #123456;
        background: linear-gradient(to bottom right, #abcdef, #123456);
        padding: 10px;
        margin: 10px;
        display: flex;
        justify-content: space-evenly;
        align-content: space-evenly;
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
