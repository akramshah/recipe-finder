import React, { useEffect, useState } from "react";
import './App.css';
import Recipe from './Components/Recipe'

const App = () => {
  const APP_ID = "fe56f905";
  const APP_KEY = "93ea7b34f667f1384d2a3dacf790cce9";
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState('') 
  const [query, setQuery] = useState('chicken')

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
  }

  const getQuery = e => {
    e.preventDefault()
    setQuery(search)
    setQuery('')
  }
  return (
    <div className = "App">
    <form onSubmit={getQuery} className="search">
    <input className="search-bar" type="text" value={search} onChange={searchUpdate} />
    <button className="search-button" type="submit">
    Search
    </button>
    </form>
    {recipes.map(recipe =>(
      <Recipe
      key={recipe.recipe.label}
      name={recipe.recipe.label} 
      calories={recipe.recipe.calories}
      image={recipe.recipe.image}
      ingredients={recipe.recipe.ingredients}
      />
    ))}
    </div>
  )
}

export default App;
