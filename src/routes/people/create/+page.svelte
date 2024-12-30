<script>
  let { form } = $props();
</script>

<a href="/people">Back</a>  <!-- Link back to the list of people -->
<h1>Add a Person</h1>  <!-- Heading changed to "Add a Person" -->

<form method="POST" action="?/create">
  <div class="mb-3">
    <label for="" class="form-label">Name</label>
    <input name="name" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Age</label>
    <input name="age" class="form-control" type="number" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Occupation</label>
    <input name="occupation" class="form-control" type="text" />
  </div>
  <div class="mb-3">
    <label for="" class="form-label">Status</label>
    <select name="status" class="form-control">
      <option value="active">Active</option>
      <option value="inactive">Inactive</option>
    </select>
  </div>
  <button type="submit" class="btn btn-primary">Add Person</button>  <!-- Button text updated to "Add Person" -->
</form>

{#if form?.success}
  <p>Person created</p>  <!-- Success message updated to "Person created" -->
{/if}
