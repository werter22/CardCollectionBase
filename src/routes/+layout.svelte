<script>
  import "./styles.css";
  let { children } = $props();
</script>

<nav
  class="navbar navbar-expand-lg bg-dark"
  data-bs-theme="dark"
>
  <div class="container-fluid">
    <!-- Logo -->
    <a class="navbar-brand text-warning" href="/">CardCollectionBase</a>
   
    <!-- Navbar Links -->
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/cards">Cards</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/decks">Decks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/players">Players</a>
        </li>
      </ul>
      <!-- Search Bar -->
      <form class="d-flex" role="search">
        <input
          class="form-control me-2 bg-secondary text-light border-0"
          type="search"
          placeholder="Search cards..."
          aria-label="Search"
        />
        <button class="btn btn-warning" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div class="container mt-3">
  {@render children()}
</div>
