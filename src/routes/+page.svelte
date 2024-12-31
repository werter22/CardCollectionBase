<script>
    let { data } = $props();
    import CardCard from "$lib/components/CardCard.svelte";

    // Function to group cards into chunks of three
    function chunkArray(array, chunkSize) {
        const chunks = [];
        for (let i = 0; i < array.length; i += chunkSize) {
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }

    // Group cards into rows of three
    let cardRows = chunkArray(data.cards, 3);
</script>

<!-- Hero Section -->
<section class="hero">
    <h1>Welcome to Card Collection Base</h1>
    <p>Discover, collect, and trade your favorite cards.</p>
    <button class="btn-primary">View Collection</button>
    <button class="btn-secondary">Join the Community</button>
</section>

<section class="features">
    <h2>Explore Our Features</h2>

    <!-- Bootstrap Carousel -->
    <div id="cardCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
            {#each cardRows as row, rowIndex}
                <div class="carousel-item {rowIndex === 0 ? 'active' : ''}">
                    <div class="row">
                        {#each row as card}
                            <div class="col-lg-4 col-md-6 col-sm-12">
                                <div class="card-wrapper">
                                    <CardCard {card} />
                                </div>
                            </div>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
        <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="prev"
        >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
        </button>
        <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#cardCarousel"
            data-bs-slide="next"
        >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
        </button>
    </div>
</section>


<!-- Static Feature Grid -->
<div class="feature-grid">
    <div class="feature-item">
        <img src="https://via.placeholder.com/300x200" alt="Card Management" />
        <h3>Card Management</h3>
        <p>Organize and showcase your cards with ease.</p>
    </div>
    <div class="feature-item">
        <img src="https://via.placeholder.com/300x200" alt="Deck Builder" />
        <h3>Deck Builder</h3>
        <p>Create the ultimate deck to dominate the competition.</p>
    </div>
    <div class="feature-item">
        <img src="https://via.placeholder.com/300x200" alt="Player Profiles" />
        <h3>Player Profiles</h3>
        <p>Connect with other collectors and expand your network.</p>
    </div>
</div>

<!-- Footer -->
<footer>
    <div>
        <p>
            Follow us on:
            <a href="/facebook">Facebook</a> |
            <a href="/instagram">Instagram</a> |
            <a href="/twitter">Twitter</a>
        </p>
        <div class="newsletter">
            <input type="email" placeholder="Subscribe to our newsletter" />
            <button>Subscribe</button>
        </div>
        <p>&copy; 2024 Card Collection Base. All Rights Reserved.</p>
    </div>
</footer>
