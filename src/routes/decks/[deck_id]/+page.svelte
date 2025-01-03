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
      <h1>{deck.Name}</h1>
      <p class="deck-theme">{deck.Theme || "No theme provided"}</p>
      <button on:click={saveDeck} class="save-btn">Save Deck</button>
    </div>
  
    <div class="cards-grid">
      {#each allCards as card}
        <div class="card-wrapper">
          <CardCard {card} />
          <label class="checkbox-label">
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
      background: rgba(0, 0, 0, 0.7); /* Dark background */
      color: #fff;
      border-radius: 15px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    }
  
    .back-button {
      margin-bottom: 16px;
    }
  
    .btn-back {
      text-decoration: none;
      font-size: 1rem;
      color: #ffcc00; /* Gold text */
      padding: 8px 12px;
      background: rgba(0, 0, 0, 0.5); /* Transparent background */
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
      display: inline-block;
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
  
    .btn-back:hover {
      background: rgba(255, 255, 255, 0.2); /* Slight highlight */
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
    }
  
    .header {
      text-align: center;
      margin-bottom: 24px;
    }
  
    .header h1 {
      font-size: 2rem;
      color: #ffcc00; /* Gold */
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.8); /* Glow effect */
    }
  
    .deck-theme {
      font-size: 1rem;
      color: #d1d1d1; /* Subtle grey text */
      font-style: italic;
    }
  
    .save-btn {
      margin-top: 16px;
      padding: 8px 16px;
      background: rgba(255, 215, 0, 0.8); /* Gold button */
      color: #000;
      border: none;
      border-radius: 8px;
      cursor: pointer;
      box-shadow: 0 2px 4px rgba(255, 215, 0, 0.4);
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
  
    .save-btn:hover {
      background: rgba(255, 215, 0, 1); /* Brighter gold */
      box-shadow: 0 4px 8px rgba(255, 215, 0, 0.6);
    }
  
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); /* Responsive grid */
      gap: 16px;
    }
  
    .card-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      border: 1px solid rgba(255, 255, 255, 0.3);
      padding: 8px;
      border-radius: 10px;
      box-shadow: 0 2px 4px rgba(255, 255, 255, 0.2);
      transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
  
    .card-wrapper:hover {
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(255, 255, 255, 0.3);
    }
  
    .checkbox-label {
      margin-top: 8px;
      font-size: 0.9rem;
      color: #fff;
    }
  
    .checkbox-label input {
      margin-right: 8px;
    }
  </style>
  