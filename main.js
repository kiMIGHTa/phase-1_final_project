function fetchData() {
    fetch(`https://kimeals.onrender.com/meal_plans`)
      .then((response) => response.json())
      .then((data) => console.log(data))
  }
  fetchData()