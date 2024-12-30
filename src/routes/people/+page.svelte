<script>
  let { data } = $props();
  import PersonCard from "$lib/components/PersonCard.svelte";  // Importing PersonCard component
</script>

<p><i>Random person data</i></p>
<div class="button-container">
  <a href="/people/create" class="addButton">Add New Person</a>
</div>

<div class="row mt-3">
  {#each data.people as person}  <!-- Loop through the "people" array -->
    <div class="col-sm-6 col-md-4 col-lg-3 mb-2 gx-2">
      <PersonCard {person}></PersonCard> <!-- Pass individual person object as prop to PersonCard -->
    </div>
  {/each}
</div>