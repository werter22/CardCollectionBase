<script>
    export let card;
</script>

<div class="card-container {card.Type.toLowerCase()}">
        <!-- Hidden input to store the card ID -->
        <input type="hidden" name="cardId" value={card._id} />


    <div class="header">
        <span class="rarity rarity-{card.Rarity.toLowerCase()}">{card.Rarity}</span>
        <span class="type type-{card.Type.toLowerCase()}">{card.Type}</span>
    </div>
    <div class="name-section">
        <span class="name">
            <a href={"/cards/" + card._id}>{card.Name}</a>
        </span>
    </div>
    <div class="image-section">
        <img class="img-fluid" src={card.CardImg} alt={card.Name} />
    </div>
    <div class="card-text-box">
        <div class="card-text">{card.CardText}</div>
    </div>
    <div class="stats">
        <span class="atk stat-bg">ATK: {card.AttackPoints || "N/A"}</span>
        <span class="def stat-bg">DEF: {card.DefensePoints || "N/A"}</span>
    </div>
</div>

<style>
    .card-container {
        border: 2px solid #777;
        border-radius: 15px;
        max-width: 300px;
        margin: 1em auto;
        padding: 1em;
        background-blend-mode: overlay;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.8);
        font-family: Arial, sans-serif;
    }

    .header {
        display: flex;
        justify-content: space-between;
        padding: 0.3em;
        font-weight: bold;
        background-color: rgba(0, 0, 0, 0.2); /* Subtle dark background */
        border-radius: 5px;
        margin-bottom: 0.5em;
    }

    .rarity, .type {
        font-size: 0.9em;
        font-weight: bold;
        padding: 0.3em 0.5em;
        border-radius: 5px;
    }

    /* Rarity Background Colors */
    .rarity-common {
        background-color: #e0f7da; /* Soft green */
        color: #2d572c; /* Dark green */
    }

    .rarity-uncommon {
        background-color: #d3f2ff; /* Light blue */
        color: #1d4e89; /* Dark blue */
    }

    .rarity-rare {
        background-color: #e8eaf6; /* Light purple */
        color: #4527a0; /* Dark purple */
    }

    .rarity-legendary {
        background-color: #fff4e5; /* Light gold */
        color: #b28704; /* Golden brown */
    }

    /* Type Background Colors */
    .type-creature {
        background-color: #fde8e8; /* Light red */
        color: #b71c1c; /* Dark red */
    }

    .type-trap {
        background-color: #f3e5f5; /* Lavender */
        color: #4a148c; /* Purple */
    }

    .type-spell {
        background-color: #e8f5e9; /* Light green */
        color: #1b5e20; /* Green */
    }

    .name-section {
        text-align: center;
        margin: 0.5em 0;
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
        padding: 0.5em;
        border-radius: 5px;
    }

    .name {
        font-size: 1.2em;
        font-weight: bold;
        color: #fff; /* White text to contrast with the dark background */
    }

    .name a {
        text-decoration: none;
        color: inherit;
    }

    .name a:hover {
        text-decoration: underline;
    }

    .image-section {
        text-align: center;
        margin: 1em 0;
    }

    img.img-fluid {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.6);
    }

    .card-text-box {
        background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent dark background */
        border: 1px solid rgba(255, 255, 255, 0.2); /* Subtle border */
        border-radius: 5px;
        padding: 0.5em;
        max-height: 100px;
        overflow-y: auto;
        margin: 0.5em 0;
        text-align: center;
        color: #fff; /* White text for contrast */
    }

    .card-text {
        font-style: italic;
        line-height: 1.5em;
    }

    .stats {
        display: flex;
        justify-content: space-between;
        padding: 0.3em;
        background-color: rgba(0, 0, 0, 0.2); /* Subtle dark background */
        border-radius: 5px;
    }

    .atk, .def {
        font-size: 1em;
        font-weight: bold;
        padding: 0.3em 0.5em;
        background-color: rgba(0, 0, 0, 0.3); /* Slightly transparent */
        color: #fff; /* White text for better readability */
        border-radius: 5px;
    }

    /* Background styles for different card types */
    .card-container.creature {
        border-color: #a15e05;
        background: url('/images/vintage_texture.png'), #c9a76e;
    }

    .card-container.trap {
        border-color: #810781;
        background: url('/images/vintage_texture.png'), #c588d1;
    }

    .card-container.spell {
        border-color: #023016;
        background: url('/images/vintage_texture.png'), #517e61;
    }

    .card-container.default {
        border-color: #888;
        background-color: #444;
    }
</style>
