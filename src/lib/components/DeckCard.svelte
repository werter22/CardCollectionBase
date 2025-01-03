<script>
    export let deck;
  </script>
  
  <div class="deck-card">
    <div class="deck-header">
      <!-- Link to the deck's detail page -->
      <a href={`/decks/${deck._id}`} class="deck-name-link">
        <h2>{deck.Name}</h2>
      </a>
      <p class="deck-theme">{deck.Theme || "No theme provided"}</p>
    </div>
  </div>
  
  <style>
    .deck-card {
      background: rgba(0, 0, 0, 0.7); /* Dark transparent background */
      border: 2px solid rgba(255, 255, 255, 0.3); /* Subtle white border */
      border-radius: 15px;
      padding: 20px;
      width: 100%;
      color: #fff;
      text-shadow: 0 1px 3px rgba(0, 0, 0, 0.7);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Subtle shadow */
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  
    .deck-card:hover {
      transform: scale(1.02);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3); /* Slightly more prominent shadow on hover */
    }
  
    .deck-header h2 {
      font-size: 1.6rem;
      font-weight: bold;
      margin-bottom: 8px;
      text-align: center;
      color: #ffcc00; /* Golden text */
    }
  
    .deck-name-link {
      text-decoration: none;
    }
  
    .deck-name-link h2:hover {
      color: #ff9900; /* Brighter golden text on hover */
      cursor: pointer;
    }
  
    .deck-theme {
      font-size: 1rem;
      font-style: italic;
      text-align: center;
      color: #d1d1d1; /* Subtle grey text for the theme */
    }
  </style>
  