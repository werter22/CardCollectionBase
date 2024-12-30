<script>
  export let data;
  let person = data.person;  // Using 'person' instead of 'movie'
</script>

<a href="/people">Back</a>

<h1>{person.name}</h1> <!-- Displaying the person's name -->
<div class="row mt-3">
  <div class="col-3">
    <img class="img-fluid" src="/images/profile.png" alt="" /> <!-- Displaying person's profile picture -->
  </div>

  <div class="col">
    <p>Age: {person.age}</p> <!-- Displaying the person's age -->
    <p>Occupation: {person.occupation}</p> <!-- Displaying the person's occupation -->
    <p>Status: {person.status ? "Active" : "Inactive"}</p> <!-- Displaying whether the person is active -->
    <form method="POST" action="?/delete">
      <input type="hidden" name="id" value={person._id}> <!-- Using the person's ID for deletion -->
      <button class="btn btn-danger">Delete Person</button> <!-- Button to delete the person -->
    </form>
  </div>
</div>
