<script>
    let { data } = $props();
    import PlayerCard from "$lib/components/PlayerCard.svelte";
  </script>
  
  <div class="card-background">
    <!-- Display Players in Two Columns -->
    <div class="row mt-3">
      {#each data.players as player}
        <div class="col-md-6 mb-3">
          <PlayerCard {player} />
        </div>
      {/each}
    </div>
  </div>

  <style>
    .card-background {
      padding: 16px;
      background-color: #f5f5f5;
    }
    .row {
      display: flex;
      flex-wrap: wrap;
    }
    .col-md-6 {
      flex: 0 0 50%;
      max-width: 50%;
    }
    .mb-3 {
      margin-bottom: 16px;
    }
  </style>