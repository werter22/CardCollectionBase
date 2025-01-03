<script>
    export let data;
    let deck = data.deck;
    let allCards = data.allCards;
  
    import CardCard from "$lib/components/CardCard.svelte";
  
    let selectedCards = new Set(deck.Cards);
  
    function toggleCard(cardId) {
      if (selectedCards.has(cardId)) {
        selectedCards.delete(cardId);
      } else {
        selectedCards.add(cardId);
      }
    }
  
    async function saveDeck() {
      const formData = new FormData();
      selectedCards.forEach((id) => formData.append("cards", id));
      formData.append("deck_id", deck._id);
  
      const response = await fetch("?", {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        alert("Deck updated successfully!");
      } else {
        alert("Failed to update deck. Please try again.");
      }
    }
  </script>
  
  <div class="deck-builder">
    <!-- Back Button -->
    <div class="back-button">
      <a href="/decks" class="btn-back">← Back to Decks</a>
    </div>
  
    <div class="header">
      <h1>Deck Builder: {deck.Name}</h1>
      <p>{deck.Theme || "No theme provided"}</p>
      <button on:click={saveDeck} class="save-btn">Save Deck</button>
    </div>
  
    <div class="cards-grid">
      {#each allCards as card}
        <div class="card-wrapper">
          <CardCard {card} />
          <label>
            <input
              type="checkbox"
              checked={selectedCards.has(card._id)}
              on:change={() => toggleCard(card._id)}
            />
            Include in Deck
          </label>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .deck-builder {
      padding: 16px;
    }
    .back-button {
      margin-bottom: 16px;
    }
    .btn-back {
      text-decoration: none;
      font-size: 1rem;
      color: #007bff;
      padding: 8px 12px;
      background-color: #f9f9f9;
      border: 1px solid #ddd;
      border-radius: 4px;
      display: inline-block;
    }
    .btn-back:hover {
      background-color: #e0e0e0;
    }
    .header {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 24px;
    }
    .save-btn {
      margin-top: 16px;
      padding: 8px 16px;
      background-color: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }
    .save-btn:hover {
      background-color: #0056b3;
    }
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      gap: 16px;
    }
    .card-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    label {
      margin-top: 8px;
      font-size: 0.9rem;
    }
  </style>
  