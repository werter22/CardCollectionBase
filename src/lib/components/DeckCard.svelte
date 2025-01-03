<script>
    export let deck; // Deck object passed as a prop
</script>

<div class="deck-card">
    <div class="deck-header">
        <!-- Link to the deck's detail page -->
        <a href={`/decks/${deck._id}`} class="deck-name-link">
            <h2>{deck.Name}</h2>
        </a>
        <p class="deck-theme">{deck.Theme}</p>
    </div>
</div>

<style>
    .deck-card {
        border-radius: 15px;
        padding: 20px;
        color: #fff;
        text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .deck-header h2 {
        font-size: 1.8rem;
        font-weight: bold;
        margin-bottom: 10px;
        text-align: center;
        color: #ffcc00;
    }

    .deck-name-link {
        text-decoration: none;
    }

    .deck-name-link h2:hover {
        color: #ff9900; /* Change color on hover */
        cursor: pointer;
    }

    .deck-theme {
        font-size: 1.2rem;
        font-style: italic;
        text-align: center;
        color: #d1d1d1;
    }
</style>
