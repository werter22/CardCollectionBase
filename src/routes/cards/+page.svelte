<script>
  let { data } = $props();
  import CardCard from "$lib/components/CardCard.svelte";
</script>

<div class="card-background">
  <div class="button-container">
    <a href="/cards/create" class="addButton">
      <i class="fas fa-plus-circle"></i> Add New Card
    </a>
  </div>
  <div class="row mt-3">
    {#each data.cards as card}
      <div class="col-sm-3 col-md-4 col-lg-4 mb-2 gx-2">
        <CardCard {card}></CardCard>
      </div>
    {/each}
  </div>
</div>
