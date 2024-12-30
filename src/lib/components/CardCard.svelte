<script>
    export let card;
</script>

<div class="card-container">
    <div>
        <img class="img-fluid" src={card.CardImg} alt={card.Name} />
    </div>
    <div class="details">
        <div class="name">
            <a href={"/cards/" + card._id}>{card.Name}</a>
        </div>
        <div>
            Rarity: {card.Rarity}
        </div>
        <div>
            Attack Points: {card.AttackPoints}
        </div>
        <div>
            Defense Points: {card.DefensePoints}
        </div>
        <div>
            Type: {card.Type}
        </div>
        <div class="card-text">
            {card.CardText}
        </div>
    </div>
</div>

<style>
    .card-container {
        border: 1px solid #777;
        background-color: #222;
        color: white;
        padding: 1em;
        border-radius: 10px;
        max-width: 300px;
        margin: 1em auto;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);
    }

    .details {
        padding: 0.5em;
    }

    .name {
        font-weight: bold;
        font-size: 1.2em;
        margin-bottom: 0.5em;
        color: #ffaa00;
    }

    .name a {
        text-decoration: none;
        color: #ffaa00;
    }

    .name a:hover {
        text-decoration: underline;
    }

    img.img-fluid {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
        margin-bottom: 1em;
    }

    .card-text {
        font-style: italic;
        margin-top: 0.5em;
        color: #ccc;
    }

    .details div {
        margin-bottom: 0.5em;
    }
</style>
