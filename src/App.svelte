<script lang="ts">
  import Card from './components/Card.svelte'
  import Formulario from './components/Formulario.svelte'
  import type ICard from './interfaces/ICard'

  let card: ICard | null = null

  function definirCard(evento: CustomEvent<ICard | null>) {
    card = evento.detail
  }
</script>

<div class="app">
  <div class="container">
    <h1 class="titulo">Search MTG cards!</h1>

    <div class="form-container">
      <Formulario on:alternarCard={definirCard} />
    </div>
  </div>

  {#if card}
    <div>
      <Card {card} />
    </div>
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
    margin: 0 auto;
    max-width: 1440px;
  }

  .container {
    padding-top: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .titulo {
    font-family: 'Bungee', cursive;

    color: rgb(21, 11, 0);
    font-size: 2rem;

    text-transform: uppercase;
  }

  
</style>
