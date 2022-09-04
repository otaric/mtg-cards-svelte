<script lang="ts">
  import type ICard from '../interfaces/ICard'

  export let card: ICard
</script>

<div class="card-container">
  <div class="img-container">
    <img class="card-img" src={card.art_normal} alt="imagem da carta" />
  </div>
  <div class="info-container">
    <h2 class="card-name">{card.card_name}</h2>
    <p>{card.type_line}</p>
    <p>{card.description}</p>

    {#if card.type_line.indexOf('Creature') != -1}
      <p class="pow-toug">{card.power} / {card.toughness}</p>
    {/if}
  </div>
</div>

<style>
  .card-container {
    font-family: 'Poppins', sans-serif;
    margin-top: 100px;
    display: flex;
    justify-content: center;
    height: min-content;
    gap: 100px;
  }

  .card-img {
    height: 400px;
  }

  .info-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 10px;
    max-width: 400px;
  }
</style>
