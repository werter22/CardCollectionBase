<script>
    export let data;
    let card = data.card;
</script>

<div class="card-container">
     <!-- Navigation Buttons -->
     <div class="navigation-buttons">
        <a href="/cards" class="btn-nav">Back to Cards</a>
        <a href="/decks" class="btn-nav">Back to Decks</a>
    </div>
    
    <!-- Deck Header -->
    <div class="card-header">
        <h1>{card.Name}</h1>
    </div>

    <!-- Card Details -->
    <div class="card-details">
        <!-- Card Image -->
        <div class="card-image">
            <img src={card.CardImg} alt={card.Name} />
        </div>

        <!-- Card Information -->
        <div class="card-info">
            <!-- Basic Information -->
            <div class="info-box">
                <h3>Card Stats</h3>
                <p><strong>Rarity:</strong> {card.Rarity}</p>
                <p><strong>Type:</strong> {card.Type}</p>
                <p><strong>Attack Points:</strong> {card.AttackPoints !== null ? card.AttackPoints : "N/A"}</p>
                <p><strong>Defense Points:</strong> {card.DefensePoints !== null ? card.DefensePoints : "N/A"}</p>
            </div>

            <!-- Additional Metadata -->
            <div class="info-box">
                <h3>Metadata</h3>
                <p><strong>Release Date:</strong> <span class="placeholder">MM/DD/YYYY</span></p>
                <p><strong>Set:</strong> <span class="placeholder">Set Name</span></p>
                <p><strong>Edition:</strong> <span class="placeholder">Edition Info</span></p>
            </div>
        </div>
    </div>

    <!-- Description -->
    <div class="description-box">
        <h3>Card Text</h3>
        <p>{card.CardText}</p>
    </div>

    <!-- Actions -->
    <div class="actions">
        <a href="/cards" class="btn-back">Back</a>
        <form method="POST" action="?/delete" style="display: inline;">
            <input type="hidden" name="id" value={card._id} />
            <button class="btn-delete">Delete Card</button>
        </form>
    </div>
</div>