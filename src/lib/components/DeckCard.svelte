<script>
    export let deck; // Single deck object passed as a prop
</script>

<div class="deck">
    <!-- Deck Header -->
    <div class="deck-header">
        <div class="deck-name">
            <strong>{deck.Name}</strong>
        </div>
        <div class="deck-theme">
            <em>{deck.Theme}</em>
        </div>
    </div>
</div>

<style>
    .deck {
        border: 1px solid #ccc;
        border-radius: 10px;
        padding: 1em;
        background: rgba(255, 255, 255, 0.1); /* Transparent background */
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }

    .deck-header {
        margin-bottom: 1.5em;
        font-size: 1.2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .deck-name {
        font-weight: bold;
        color: #ffaa00; /* Gold color for deck name */
    }

    .deck-theme {
        font-style: italic;
        color: #ccc;
    }

    .row {
        display: flex;
        flex-wrap: wrap;
        gap: 15px; /* Add spacing between cards */
    }

    .col-sm-6,
    .col-md-4,
    .col-lg-3 {
        flex: 1 1 calc(25% - 15px); /* Responsive column layout */
        max-width: calc(25% - 15px); /* Ensure 4 columns per row */
        box-sizing: border-box;
    }

    @media (max-width: 992px) {
        .col-md-4 {
            flex: 1 1 calc(33.333% - 15px); /* Show 3 columns on medium screens */
            max-width: calc(33.333% - 15px);
        }
    }

    @media (max-width: 768px) {
        .col-sm-6 {
            flex: 1 1 calc(50% - 15px); /* Show 2 columns on small screens */
            max-width: calc(50% - 15px);
        }
    }

    @media (max-width: 576px) {
        .col-sm-6 {
            flex: 1 1 100%; /* Show 1 column on extra small screens */
            max-width: 100%;
        }
    }
</style>
