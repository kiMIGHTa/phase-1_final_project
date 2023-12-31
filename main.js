// function calculate BMI and selects appropriate recipes
function getRecipes(data) {
    let result = document.getElementById('result')
    result.style.display = `block`
  
    // Get user input values
    const username = document.getElementById('username').value
    const height = document.getElementById('heightInput').value
    const weight = document.getElementById('weightInput').value
    const BMI = weight / (height * height)
  
    // Create a user object with calculated BMI
    let userObj = {
      "id": 1,
      "name": username,
      "weight": weight,
      "height": height,
      "bmi": BMI
    }
  
    // Call the changeUser function with the user object
    changeUser(userObj)
  
    let BMIResult = document.createElement('div')
    result.appendChild(BMIResult)
  
    // Display BMI and choose recipe category based on BMI value
    if (BMI < 18.5) {
      BMIResult.innerHTML = `<p>Your BMI is</p><p>${BMI}</p><p>Underweight recipes</p>`
      getUnderWeightRecipes(data)
    } else if (BMI >= 18.5 && BMI < 25.0) {
      BMIResult.innerHTML = `<p>Your BMI is</p><p>${BMI}</p><p>Healthy weight recipes</p>`
      getNormalWeightRecipes(data)
    } else if (BMI >= 25.0 && BMI < 30.0) {
      BMIResult.innerHTML = `<p>Your BMI is</p><p>${BMI}</p><p>Overweight recipes</p>`
      getOverWeightRecipes(data)
    } else if (BMI > 30.0) {
      BMIResult.innerHTML = `<p>Your BMI is</p><p>${BMI}</p><p>Obese recipes</p>`
      getObeseRecipes(data)
    }
  }
  
  //fetches recipes from database
  function fetchData() {
    fetch(`https://kimeals.onrender.com/meal_plans`)
      .then((response) => response.json())
      .then((data) => getRecipes(data))
  }
  

  function getNormalWeightRecipes(mealPlans) {
    if (mealPlans[0].category === 'Normal Weight') {
      let result = document.getElementById('result')
      let recipes = mealPlans[0].recipes
  
      recipes.forEach((recipe) => {
        let output = document.createElement('div')
        output.className = "output"
  
        let recipeName = document.createElement('h3')
        recipeName.innerText = recipe.name
        output.appendChild(recipeName)
  
        let ingredientsTitle = document.createElement('h4')
        ingredientsTitle.innerText = 'Ingredients'
        output.appendChild(ingredientsTitle)
  
        let ingredientsList = document.createElement('ul')
        recipe.ingredients.forEach((ingredient) => {
          let ingredientItem = document.createElement('li')
          ingredientItem.innerText = ingredient
          ingredientsList.appendChild(ingredientItem)
        })
        output.appendChild(ingredientsList)
  
        let instructionsTitle = document.createElement('h4')
        instructionsTitle.innerText = 'Instructions'
        output.appendChild(instructionsTitle)
  
        let instructionsList = document.createElement('ol')
        recipe.instructions.forEach((instruction) => {
          let instructionItem = document.createElement('li')
          instructionItem.innerText = instruction
          instructionsList.appendChild(instructionItem)
        })
        output.appendChild(instructionsList)
  
        result.appendChild(output)
      })
    }
 }
  

  function getUnderWeightRecipes(mealPlans) {
    if(mealPlans[1].category==`Underweight`) {
      let result = document.getElementById('result')
      let recipes = mealPlans[1].recipes
  
      recipes.forEach((recipe) => {
        let output = document.createElement('div')
        output.className = "output"

  
        let recipeName = document.createElement('h3')
        recipeName.innerText = recipe.name
        output.appendChild(recipeName)
  
        let ingredientsTitle = document.createElement('h4')
        ingredientsTitle.innerText = 'Ingredients'
        output.appendChild(ingredientsTitle)
  
        let ingredientsList = document.createElement('ul')
        recipe.ingredients.forEach((ingredient) => {
          let ingredientItem = document.createElement('li')
          ingredientItem.innerText = ingredient;
          ingredientsList.appendChild(ingredientItem)
        })
        output.appendChild(ingredientsList)
  
        let instructionsTitle = document.createElement('h4')
        instructionsTitle.innerText = 'Instructions'
        output.appendChild(instructionsTitle)
  
        let instructionsList = document.createElement('ol')
        recipe.instructions.forEach((instruction) => {
          let instructionItem = document.createElement('li')
          instructionItem.innerText = instruction
          instructionsList.appendChild(instructionItem)
        })
        output.appendChild(instructionsList)
  
        result.appendChild(output)
      })
    }
  }

  function getOverWeightRecipes(mealPlans) {
    if(mealPlans[2].category==`Overweight`) {
      let result = document.getElementById('result')
      let recipes = mealPlans[2].recipes
  
      recipes.forEach((recipe) => {
        let output = document.createElement('div')
        output.className = "output"

  
        let recipeName = document.createElement('h3')
        recipeName.innerText = recipe.name
        output.appendChild(recipeName)
  
        let ingredientsTitle = document.createElement('h4')
        ingredientsTitle.innerText = 'Ingredients'
        output.appendChild(ingredientsTitle)
  
        let ingredientsList = document.createElement('ul')
        recipe.ingredients.forEach((ingredient) => {
          let ingredientItem = document.createElement('li')
          ingredientItem.innerText = ingredient
          ingredientsList.appendChild(ingredientItem)
        });
        output.appendChild(ingredientsList)
  
        let instructionsTitle = document.createElement('h4')
        instructionsTitle.innerText = 'Instructions'
        output.appendChild(instructionsTitle)
  
        let instructionsList = document.createElement('ol')
        recipe.instructions.forEach((instruction) => {
          let instructionItem = document.createElement('li')
          instructionItem.innerText = instruction
          instructionsList.appendChild(instructionItem)
        })
        output.appendChild(instructionsList)
  
        result.appendChild(output)
      })
    }
  }


  function getObeseRecipes(mealPlans) {
    if(mealPlans[3].category==`Obese`) {
      let result = document.getElementById('result')
      let recipes = mealPlans[3].recipes
  
      recipes.forEach((recipe) => {
        let output = document.createElement('div')
        output.className = "output"

  
        let recipeName = document.createElement('h3')
        recipeName.innerText = recipe.name
        output.appendChild(recipeName)
  
        let ingredientsTitle = document.createElement('h4')
        ingredientsTitle.innerText = 'Ingredients'
        output.appendChild(ingredientsTitle)
  
        let ingredientsList = document.createElement('ul')
        recipe.ingredients.forEach((ingredient) => {
          let ingredientItem = document.createElement('li')
          ingredientItem.innerText = ingredient
          ingredientsList.appendChild(ingredientItem)
        });
        output.appendChild(ingredientsList)
  
        let instructionsTitle = document.createElement('h4')
        instructionsTitle.innerText = 'Instructions'
        output.appendChild(instructionsTitle)
  
        let instructionsList = document.createElement('ol')
        recipe.instructions.forEach((instruction) => {
          let instructionItem = document.createElement('li')
          instructionItem.innerText = instruction
          instructionsList.appendChild(instructionItem)
        })
        output.appendChild(instructionsList)
  
        result.appendChild(output)
      })
    }
  }
  //updates user information in the database
  function changeUser(userObj){
    fetch(`https://kimeals.onrender.com/users/${userObj.id}`,{
        method: "PATCH",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userObj)
    })
    .then((response)=>response.json())
    .then(user => console.log(user))


}




