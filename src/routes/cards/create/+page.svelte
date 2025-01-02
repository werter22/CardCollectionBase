<script>
    let { form } = $props(); // Grabbing the form object from props
  </script>
  
  <a href="/cards">Back</a> <!-- Link to go back to the card list -->
  <h1>Create a New Card</h1> <!-- Heading for the card creation form -->
  
  <form method="POST" action="?/create">
    <!-- Card Name -->
    <div class="mb-3">
      <label for="name" class="form-label">Card Name</label>
      <input type="text" id="name" name="name" class="form-control" placeholder="Enter card name" required />
    </div>
  
    <!-- Rarity -->
    <div class="mb-3">
      <label for="rarity" class="form-label">Rarity</label>
      <select name="rarity" class="form-control" required>
        <option value="" disabled selected>Select rarity</option>
        <option value="Common">Common</option>
        <option value="Uncommon">Uncommon</option>
        <option value="Rare">Rare</option>
        <option value="Legendary">Legendary</option>
      </select>
    </div>
  
    <!-- Attack Points -->
    <div class="mb-3">
      <label for="attackPoints" class="form-label">Attack Points</label>
      <input type="number" id="attackPoints" name="attackPoints" class="form-control" placeholder="Enter attack points" min="0" />
    </div>
  
    <!-- Defense Points -->
    <div class="mb-3">
      <label for="defensePoints" class="form-label">Defense Points</label>
      <input type="number" id="defensePoints" name="defensePoints" class="form-control" placeholder="Enter defense points" min="0" />
    </div>
  
    <!-- Type -->
    <div class="mb-3">
      <label for="type" class="form-label">Type</label>
      <select id="type" name="type" class="form-control" required>
        <option value="" disabled selected>Select type</option>
        <option value="Creature">Creature</option>
        <option value="Spell">Spell</option>
        <option value="Trap">Trap</option>
      </select>
    </div>
  
    <!-- Card Text -->
    <div class="mb-3">
      <label for="cardText" class="form-label">Card Text</label>
      <textarea id="cardText" name="cardText" class="form-control" rows="4" placeholder="Enter card description or abilities" required></textarea>
    </div>
  
    <!-- Submit Button -->
    <button type="submit" class="btn btn-primary">Create Card</button>
  </form>
  
  <!-- Success Message (if form submission is successful) -->
  {#if form?.success}
    <p>Card created successfully!</p>
  {/if}
  