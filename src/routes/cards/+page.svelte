
<script>
    let { data } = $props();
    import CardCard from "$lib/components/CardCard.svelte";
  </script>
  
  <p><i></i></p>
  
  <div class="row mt-3">
    {#each data.cards as card}
      <div class="col-sm-3 col-md-4 col-lg-4 mb-2 gx-2">
        <CardCard {card}></CardCard>
      </div>
    {/each}
  </div>