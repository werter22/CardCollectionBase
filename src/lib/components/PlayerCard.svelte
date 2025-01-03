<script>
    export let player;
</script>

<div class="player-card">
    <div class="profile-section">
      <div
        class="profile-pic"
        style="background-image: url({player.ProfilePic});"
      ></div>
      <div class="profile-info">
        <h3>{player.Name}</h3>
        <p>{player.Rank}</p>
      </div>
    </div>
    <div class="decks">
      {#each player.OwnedDecks as deck}
        <div class="deck">{deck}</div>
      {/each}
    </div>
  </div>

  <style>
    .player-card {
      border: 1px solid #ccc;
      border-radius: 8px;
      width: 300px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: Arial, sans-serif;
      background-color: #f9f9f9;
    }
    .profile-section {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 16px;
    }
    .profile-pic {
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-size: cover;
      background-position: center;
      background-image: url('/images/defaultProfile.png');
    }
    .profile-info {
      flex: 1;
      margin-left: 16px;
      text-align: left;
    }
    .profile-info h3 {
      margin: 0;
      font-size: 1.2rem;
      color: #333;
    }
    .profile-info p {
      margin: 4px 0 0;
      color: #777;
    }
    .decks {
      width: 100%;
    }
    .deck {
      border: 1px solid #ddd;
      padding: 8px;
      margin: 4px 0;
      border-radius: 4px;
      background-color: #fff;
      text-align: center;
    }
  </style>