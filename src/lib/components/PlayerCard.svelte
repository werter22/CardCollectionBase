<script>
    export let player;
  
    // Map rank to corresponding border colors
    const rankColors = {
      Champion: "rgba(255, 215, 0, 0.8)", // Gold
      Advanced: "rgba(128, 0, 128, 0.8)", // Purple
      Intermediate: "rgba(0, 0, 255, 0.8)", // Blue
      Beginner: "rgba(255, 255, 255, 0.8)", // White
    };
  
    // Get the border color based on the player's rank
    const borderColor = rankColors[player.Rank] || "rgba(255, 255, 255, 0.8)"; // Default to white if rank is unknown
  </script>
  
  <div class="player-card">
    <div class="profile-section">
      <div
        class="profile-pic"
        style="
          background-image: url({player.ProfilePic});
          border-color: {borderColor};
          box-shadow: 0 0 15px {borderColor};
        "
      ></div>
      <div class="profile-info">
        <h3>{player.Name}</h3>
        <p>{player.Rank}</p>
      </div>
    </div>
    <div class="decks">
      {#each player.Decks as deck}
        <div class="deck">
          <a href={`/decks/${deck._id}`}>{deck.Name}</a>
        </div>
      {/each}
    </div>
  </div>
  
  <style>
    .player-card {
      background: rgba(0, 0, 0, 0.7); /* Dark transparent background */
      border: 1px solid rgba(255, 215, 0, 0.7); /* Default border */
      border-radius: 15px;
      padding: 16px;
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
      color: #f8f8f8; /* Soft white text */
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.5); /* Default shadow */
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      height: 300px; /* Fixed height for uniform card sizes */
    }
    .player-card:hover {
      transform: scale(1.02);
      box-shadow: 0 0 20px rgba(255, 215, 0, 0.8);
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
      border: 2px solid; /* Border color is set dynamically */
      box-shadow: 0 0 15px; /* Shadow color is set dynamically */
      transition: box-shadow 0.3s ease, border-color 0.3s ease;
    }
    .profile-info {
      flex: 1;
      margin-left: 16px;
      text-align: left;
    }
    .profile-info h3 {
      margin: 0;
      font-size: 1.4rem;
      color: rgba(255, 215, 0, 1); /* Golden text */
      text-shadow: 0 0 8px rgba(255, 215, 0, 0.7); /* Glowing effect */
    }
    .profile-info p {
      margin: 4px 0 0;
      color: #f8f8f8; /* Soft white text */
      font-size: 1rem;
    }
    .decks {
      width: 100%;
      margin-top: 16px;
      flex-grow: 1; /* Ensures decks section stretches to fill the remaining space */
      display: flex;
      flex-direction: column;
      justify-content: center; /* Vertically center the decks */
    }
    .deck {
      border: 1px solid rgba(255, 215, 0, 0.7); /* Golden border */
      border-radius: 8px;
      padding: 8px;
      margin: 4px 0;
      background: rgba(0, 0, 0, 0.5); /* Dark transparent background */
      text-align: center;
      color: rgba(255, 215, 0, 0.9); /* Golden text */
      font-weight: bold;
      box-shadow: 0 0 10px rgba(255, 215, 0, 0.4); /* Glowing shadow */
      transition: background 0.3s ease, box-shadow 0.3s ease;
    }
    .deck:hover {
      background: rgba(255, 215, 0, 0.2); /* Subtle golden highlight */
      box-shadow: 0 0 15px rgba(255, 215, 0, 0.7);
    }
    .deck a {
      text-decoration: none;
      color: rgba(255, 215, 0, 1); /* Golden text */
    }
    .deck a:hover {
      text-decoration: underline;
    }
  </style>
  