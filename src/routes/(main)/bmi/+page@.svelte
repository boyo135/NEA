<script>
  let height = 0;
  let weight = 0;
  let bmi = null;

  function calculateBMI() {
    if (height > 0 && weight > 0) {
      bmi = weight / ((height / 100) ** 2);
    }
  }
</script>

<h2 class="title">BMI Calculator</h2>

<form on:submit|preventDefault={calculateBMI}>
  <label for="height">Height (in cm):</label>
  <input id="height" type="number" bind:value={height} min="0" required />

  <label for="weight">Weight (in kg):</label>
  <input id="weight" type="number" bind:value={weight} min="0" required />

  <button type="submit">Calculate</button>
</form>

{#if bmi !== null}
  <p>Your BMI: {bmi.toFixed(2)}</p>
{/if}

<a href="/" class="back-link">← Back to Home</a>

<style>

  .title{
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    font-size: 2em;
  }

  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
    margin: auto;
  }

  label {
    margin: 10px 0 5px;
  }

  input, button {
    padding: 10px;
    margin-bottom: 15px;
    border-radius: 5px;
    border: 1px solid #ddd;
  }

  button {
    background-color: #ff3b5c;
    color: white;
    cursor: pointer;
  }

  button:hover {
    background-color: #eb6969;
  }

  .back-link {
    display: block;
    margin-top: 20px;
    color: #ff3b5c;
    text-decoration: none;
  }

  .back-link:hover {
    color: #eb6969;
  }

</style>