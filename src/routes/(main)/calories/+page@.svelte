<script>
  let age = 0;
  let gender = 'male';
  let height = 0;
  let weight = 0;
  let activityLevel = 1;
  let totalCalories = null;

  function calculateCalories() {
    let bmr;
    if (gender === 'male') {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) + 5;
    } else {
      bmr = (10 * weight) + (6.25 * height) - (5 * age) - 161;
    }
    totalCalories = bmr * activityLevel;
  }
</script>

<h2 class="title">Calories Calculator</h2>

<form on:submit|preventDefault={calculateCalories}>
  <label for="age">Age:</label>
  <input id="age" type="number" bind:value={age} min="0" required />

  <label for="gender">Gender:</label>
  <select id="gender" bind:value={gender}>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>

  <label for="height">Height (in cm):</label>
  <input id="height" type="number" bind:value={height} min="0" required />

  <label for="weight">Weight (in kg):</label>
  <input id="weight" type="number" bind:value={weight} min="0" required />

  <label for="activityLevel">Activity Level:</label>
  <select id="activityLevel" bind:value={activityLevel}>
    <option value="1">BMR (no exercise)</option>
    <option value="1.2">Sedentary (little or no exercise)</option>
    <option value="1.375">Light (light exercise)</option>
    <option value="1.465">Moderate (moderate exercise)</option>
    <option value="1.55">Active (daily exercise)</option>
    <option value="1.725">Very Active (hard exercise)</option>
    <option value="1.9">Extremely Active (very hard exercise)</option>
  </select>

  <button type="submit">Calculate</button>
</form>

{#if totalCalories !== null}
  <p>Total Calories Needed: {totalCalories.toFixed(2)}</p>
{/if}
  
<a href="/" class="back-link">← Back to Home</a>

  <style>

    .title{
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 20px;
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
  
    input, select, button {
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
    color: #ff7f7f;
    text-decoration: none;
  }

  .back-link:hover {
    color: #ff4f4f;
  }
  
  </style>