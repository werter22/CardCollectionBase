<script>
    let { data } = $props(); // `data` contains a list of all decks with player and card details
    import DeckCard from "$lib/components/DeckCard.svelte"; // Component for a single deck
    import DeckCardList from "$lib/components/DeckCardList.svelte"; // List of cards in the deck
  </script>
  
  <div class="decks-list">
    {#each data.decks as deck}
      <div class="deck-container">
        <!-- Player Info -->
        {#if deck.player}
          <div class="player-info">
            <img src={deck.player.ProfilePic} alt={deck.player.Name} class="profile-pic" />
            <p>{deck.player.Name}</p>
          </div>
        {/if}
  
        <!-- Deck Info -->
        <DeckCard {deck} />
  
        <!-- Cards in the Deck -->
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
  
    .player-info {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
    }
  
    .profile-pic {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.5);
      margin-bottom: 8px;
    }
  
    .player-info p {
      font-size: 1rem;
      color: #ffcc00;
    }
  </style>
  