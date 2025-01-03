<script>
    export let data;
    let card = data.card;
    let containingDecks = data.containingDecks; // List of decks containing the card
  </script>
  
  <div class="card-container">
    <!-- Header -->
    <div class="card-header">
      <h1>{card.Name}</h1>
      <p>{card.Type}</p>
    </div>
  
    <!-- Details Section -->
    <div class="card-details">
      <!-- Card Image -->
      <div class="card-image">
        <img src={card.CardImg} alt={card.Name} />
      </div>
  
      <!-- Card Information -->
      <div class="card-info">
        <!-- Stats -->
        <div class="info-box">
          <h3>Card Stats</h3>
          <p><strong>Rarity:</strong> {card.Rarity}</p>
          <p><strong>Attack Points:</strong> {card.AttackPoints ?? "N/A"}</p>
          <p><strong>Defense Points:</strong> {card.DefensePoints ?? "N/A"}</p>
        </div>
  
        <!-- Metadata -->
        <div class="info-box">
          <h3>Metadata</h3>
          <p><strong>Release Date:</strong> <span class="placeholder">MM/DD/YYYY</span></p>
          <p><strong>Set:</strong> <span class="placeholder">Set Name</span></p>
          <p><strong>Edition:</strong> <span class="placeholder">Edition Info</span></p>
        </div>
      </div>
    </div>
  
    <!-- Description Section -->
    <div class="description-box">
      <h3>Card Text</h3>
      <p>{card.CardText}</p>
    </div>
  
    <!-- Decks Containing the Card -->
    <div class="containing-decks">
      <h3>Decks Containing This Card</h3>
      {#if containingDecks.length > 0}
        <ul>
          {#each containingDecks as deck}
            <li><a href={`/decks/${deck._id}`}>{deck.Name}</a></li>
          {/each}
        </ul>
      {:else}
        <p>This card is not included in any decks.</p>
      {/if}
    </div>
  
    <!-- Actions -->
    <div class="actions">
      <a href="/cards" class="btn-back">Back to Cards</a>
      <form method="POST" action="?/delete" style="display: inline;">
        <input type="hidden" name="id" value={card._id} />
        <button class="btn-delete">Delete Card</button>
      </form>
    </div>
  </div>
  
  <style>
    /* Container Styling */
    .card-container {
      background: rgba(0, 0, 0, 0.4);
      border-radius: 15px;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
      padding: 2em;
      max-width: 900px;
      margin: 2em auto;
      color: #fff;
      font-family: 'Arial, sans-serif';
    }
  
    /* Header Styling */
    .card-header {
      text-align: center;
      margin-bottom: 2em;
    }
  
    .card-header h1 {
      font-size: 2.5em;
      color: #ffaa00;
      margin-bottom: 0.5em;
    }
  
    .card-header p {
      font-size: 1.2em;
      color: #ccc;
    }
  
    /* Details Section */
    .card-details {
      display: flex;
      flex-wrap: wrap;
      gap: 2em;
    }
  
    /* Image Styling */
    .card-image {
      flex: 0 0 300px;
      max-width: 300px;
      margin: 1em auto;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    .card-image img {
      width: 100%;
      height: auto;
      border-radius: 10px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    }
  
    /* Information Styling */
    .card-info {
      flex: 1 1 500px;
      display: flex;
      flex-direction: column;
    }
  
    .info-box {
      background: rgba(0, 0, 0, 0.6);
      padding: 1.5em;
      border-radius: 10px;
      margin-bottom: 1.5em;
    }
  
    .info-box h3 {
      margin-bottom: 0.8em;
      color: #ffcc33;
      border-bottom: 2px solid #ffaa00;
      padding-bottom: 0.3em;
    }
  
    .info-box p {
      margin: 0.5em 0;
      font-size: 1em;
    }
  
    .info-box strong {
      color: #ffaa00;
    }
  
    /* Description Styling */
    .description-box {
      background: rgba(0, 0, 0, 0.6);
      padding: 1.5em;
      border-radius: 10px;
    }
  
    .description-box h3 {
      margin-bottom: 0.8em;
      color: #ffcc33;
      border-bottom: 2px solid #ffaa00;
      padding-bottom: 0.3em;
    }
  
    .description-box p {
      font-size: 1em;
      line-height: 1.5;
    }
  
    /* Containing Decks Styling */
    .containing-decks {
      background: rgba(0, 0, 0, 0.6);
      padding: 1.5em;
      border-radius: 10px;
      margin-top: 1.5em;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    }
  
    .containing-decks h3 {
      margin-bottom: 1em;
      color: #ffcc33;
      border-bottom: 2px solid #ffaa00;
      padding-bottom: 0.3em;
    }
  
    .containing-decks ul {
      list-style: none;
      padding: 0;
    }
  
    .containing-decks ul li {
      margin-bottom: 8px;
    }
  
    .containing-decks ul li a {
      color: #ffaa00;
      text-decoration: none;
      font-size: 1em;
      transition: color 0.3s ease;
    }
  
    .containing-decks ul li a:hover {
      color: #ff9900;
      text-decoration: underline;
    }
  
    /* Actions Styling */
    .actions {
      text-align: center;
      margin-top: 2em;
    }
  
    .btn-back,
    .btn-delete {
      padding: 0.8em 1.5em;
      border: none;
      border-radius: 5px;
      font-size: 1em;
      cursor: pointer;
      margin: 0 0.5em;
      transition: background 0.3s ease;
    }
  
    .btn-back {
      background-color: #6c757d;
      color: #fff;
    }
  
    .btn-back:hover {
      background-color: #5a6268;
    }
  
    .btn-delete {
      background-color: #dc3545;
      color: #fff;
    }
  
    .btn-delete:hover {
      background-color: #c82333;
    }
  
    /* Responsive Design */
    @media (max-width: 768px) {
      .card-details {
        flex-direction: column;
        align-items: center;
      }
  
      .card-image,
      .card-info {
        max-width: 100%;
      }
    }
  </style>
  