<script>
    let { data } = $props();
    import PlayerCard from "$lib/components/PlayerCard.svelte";
  </script>
  
  <div class="players-grid">
    {#each data.players as player}
      <PlayerCard {player} />
    {/each}
  </div>
  
  <style>
    .players-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Two or more columns */
      gap: 16px;
      padding: 16px;
    }
  </style>
  