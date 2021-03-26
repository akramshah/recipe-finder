import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from './Components/Recipe'

const App = () => {
  const APP_ID = "69c4dc1f";
  const APP_KEY = "b67dd3c1a53e07f1d4830b0860898f4c";
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('') 
  const [query, setQuery] = useState('')

  useEffect(() => {
    getAllRecipes()
  }, [query])

  const getAllRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }

  const searchUpdate = e => {
    setSearch(e.target.value)
    // console.log(search)
    setQuery('chicken')
  }

  const getQuery = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div className = "App">
    <div className = "blurb">
      <h1>Quick Prep</h1>
      <p>QuickPrep is an app that allows you to search through an extensive database of recipes via Edamam. Try searching by ingredient or dish, and see a list ingredients and calories. A simple way to find the recipes you're looking for, without all the added nonsense of recipe articles. Try it! Type in "chicken", "eggplant", "Thai" into the search bar.</p>
    </div>
    <form onSubmit={getQuery} className="search">
    <input className="search-bar" type="text" value={search} onChange={searchUpdate} />
    <button className="search-button" type="submit">
    Search
    </button>
    </form>
    <div className="recipe-card">
    {recipes.map(recipe=>(
     <Recipe
      key={recipe.recipe.id}
      name={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
     </div>
    </div>
  )
}

export default App;
