<script>
  export let person;  // Changed the name to "personData" to avoid confusion
</script>

    <div class="person-card">
      <div>
        <img class="img-fluid" src="/images/profile.png" alt="" />
      </div>
      <div class="details">
        <div class="name">
          <a href={"/people/" + person._id}>{person.name}</a>
        </div>
        <div>
          Age: {person.age}
        </div>
        <div>
          Occupation: {person.occupation}
        </div>
        <div>
          Status: {person.status ? "Active" : "Inactive"}
        </div>
      </div>
    </div>

<style>

  .person-card {
    border: 1px solid #555;
    background-color: #444;
    color: white;
    padding: 1em;
  }

  .details {
    padding: 0.5em;
  }

  .name {
    font-weight: bold;
  }

  img.img-fluid {
    max-width: 100%;
    height: auto;
  }
</style>
