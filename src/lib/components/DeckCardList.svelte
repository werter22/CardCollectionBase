<script>
    export let deck; // Deck object passed as a prop
</script>

<div class="deck-card-list">
    <h3>Cards</h3>
    <ul>
        {#each deck.CardDetails as card}
            <li class={`card-container ${card.Type}`}>
                <div class="name-section">
                    <span class="name">
                        <a href={`/cards/${card._id}`}>{card.Name}</a>
                    </span>
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .deck-card-list {
        background: rgba(0, 0, 0, 0.6);
        padding: 15px;
        border-radius: 10px;
        color: #fff;
        margin-top: 10px;
        font-family: 'Arial', sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .deck-card-list h3 {
        font-size: 1.5rem;
        margin-bottom: 20px;
        color: #ffcc00;
        border-bottom: 1px solid #ffcc00;
        padding-bottom: 5px;
        text-align: center;
    }

    .deck-card-list ul {
        list-style: none;
        padding: 0;
        display: grid;
        grid-template-columns: repeat(2, 1fr); /* Two columns */
        width: 100%; /* Full width of the container */
        justify-items: center; /* Center items horizontally */
    }

    .card-container {
        font-size: 1.2rem;
        padding: 15px;
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 5px;
        background: rgba(255, 255, 255, 0.1);
        transition: transform 0.2s, background 0.2s;
        text-align: center;
        width: 90%; /* Consistent width for all cards */
        box-sizing: border-box; /* Include padding and border in width */
        min-height: 60px; /* Set a minimum height for uniform size */
        margin-bottom: 10px;
    }

    .card-container:hover {
        transform: scale(1.05);
    }

    .name-section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .name a {
        color: #ffcc00;
        text-decoration: none;
        font-weight: bold;
        transition: color 0.2s;
    }

    .name a:hover {
        color: #ffda34;
        text-decoration: underline;
    }

    /* Dynamic Card Types */
    .card-container.creature {
        border-color: #a15e05;
        background: rgba(201, 167, 110, 0.6); /* Add transparency */
    }

    .card-container.trap {
        border-color: #810781;
        background: rgba(197, 136, 209, 0.6); /* Add transparency */
    }

    .card-container.spell {
        border-color: #023016;
        background: rgba(81, 126, 97, 0.6); /* Add transparency */
    }

    .card-container.unknown {
        border-color: #333;
        background: #555;
    }
</style>
