<script lang="ts">
  import { createEventDispatcher } from 'svelte'

  import type ICard from '../interfaces/ICard'
  import montaCard from '../utils/montaCard'

  let valorInput: string = ''

  let statusErro: null | number = null

  const dispatch = createEventDispatcher<{
    alternarCard: ICard | null
  }>()

  function cartaMTG(text: string) {
    return fetch(`https://api.scryfall.com/cards/named?fuzzy=${text}`)
  }

  async function enviarCard() {
    const respostaCard = await cartaMTG(valorInput)

    if (respostaCard.ok) {
      const dadosCard = await respostaCard.json()

      dispatch('alternarCard', montaCard(dadosCard))

      statusErro = null
    } else {
      statusErro = respostaCard.status
      dispatch('alternarCard', null)
    }
  }
</script>

<form class="form" on:submit|preventDefault={enviarCard}>
  <input
    type="text"
    class="input"
    placeholder="search for a card here"
    class:erro-input={statusErro === 400 || statusErro === 404}
    bind:value={valorInput}
  />

  {#if statusErro === 400 || statusErro === 404}
    <span class="erro">Card not found </span>
  {/if}

  <div class="botao-container">
    <button type="submit" class="botao">search</button>
  </div>
</form>

<style>
  .form {
    display: flex;
    position: relative;
  }

  .input {
    font-family: 'Poppins', sans-serif;
    width: 500px;
    padding: 10px 10px;
    border-radius: 8px 0 0 8px;
    border: 1px solid rgb(21, 11, 0);
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-weight: 300;
    line-height: 26px;
    color: #979797;
  }

  .erro {
    font-family: 'Poppins', sans-serif;
    position: absolute;
    bottom: -25px;
    left: 0;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .erro-input {
    border: 1px solid #ff003e;
  }

  .botao {
    font-family: 'Poppins', sans-serif;
    padding: 10px 10px;
    border-radius: 0 8px 8px 0;
    border: none;
    background: rgb(21, 11, 0);
    color: rgb(249, 250, 244);
    cursor: pointer;
    height: 100%;
    transition: background-color 0.2s;
    position: relative;
  }
</style>
