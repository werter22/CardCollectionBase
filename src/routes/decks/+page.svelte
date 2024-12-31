<script>
    let { data } = $props(); // `data` contains a list of all decks
    import DeckCard from "$lib/components/DeckCard.svelte"; // Component for a single deck
</script>

<div class="decks-list">
    {#each data.decks as deck}
        <DeckCard {deck}></DeckCard>
    {/each}
</div>

<style>
    .decks-list {
        display: flex;
        flex-direction: column;
        gap: 2em;
        margin: 2em 0;
    }
</style>