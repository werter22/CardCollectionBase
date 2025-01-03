<script>
    let { data } = $props(); // `data` contains a list of all decks
    import DeckCard from "$lib/components/DeckCard.svelte"; // Component for a single deck
    import DeckCardList from "$lib/components/DeckCardList.svelte"; 
</script>

<div class="decks-list">
    {#each data.decks as deck}
        <div class="deck-container">
            <DeckCard {deck} />
            <DeckCardList {deck} />
        </div>
    {/each}
</div>

<style>

    .decks-list {
        display: flex;
        flex-direction: column;
        gap: 2em;
        padding: 2em;
    }

    .deck-container {
        display: flex;
        flex-direction: column;
        gap: 1em;
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 15px;
        background: rgba(0, 0, 0, 0.7);
        padding: 20px;
    }
</style>