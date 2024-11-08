<script>
  let totalCalories = 0;
  let currentCalories = 0;
  let bmi = 0;
  let progress = (currentCalories / totalCalories) * 100;
</script>

<style>
  .card {
    position: relative;
    width: 300px;
    margin: auto;
    background: rgba( 255, 255, 255, 0.3 );
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 7px );
    text-align: center;
  }

  .progress-bar {
    height: 20px;
    background-color: #ddd;
    border-radius: 10px;
    margin-top: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background-color: #f53b5c;
    transition: width 0.3s;
  }

  .links {
    margin-top: 20px;
  }

  .links a {
    display: inline-block;
    margin: 10px;
    padding: 10px;
    border-radius: 5px;
    background-color: #ff3b5c;
    color: white;
    text-decoration: none;
    font-weight: bold;
    transition: background-color 0.3s;
  }

  .links a:hover {
    background-color: #eb6969;
  }
</style>

<div class="card">
  <h3>Calories</h3>
  <div class="links">
    <a href="/calories">Go to Calorie Calculator</a>
  </div>

  <h3>BMI</h3>
  <div class="links">
    <a href="/bmi">Go to BMI Calculator</a>
  </div>

  <div class="progress-bar">
    <div class="progress-fill" style="width: {progress}%"></div> 
  </div>

  <p>Progress: {Math.round(progress)}%</p>
</div>
