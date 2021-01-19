import React, { useEffect, useState } from 'react';
import './App.css';

import Recipe from './recipe';

const App = () => {

  const APP_ID = '758b73f4';
  const APP_KEY = 'fbf7add7889ec952606a064c431a73eb'

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken')

  useEffect(() => {
    getRecipies();
  }, [query])

  const getRecipies = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
    const data = await response.json();
    console.log(data.hits);
    setRecipes(data.hits);
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className='App'>
      <h1>Noels Recipe App</h1>
      <form onSubmit={getSearch} className='search-form'>
        <input className='search-bar' type='text' value={search} onChange={updateSearch}/>
        <button className='search-button' type='submit'>Search</button>
      </form>

    <div className='recipes'>
    {recipes.map(recipe => (
      <Recipe 
        key={recipe.recipe.label}
        title={recipe.recipe.label} 
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingredients={recipe.recipe.ingredients}
        healthLabels={recipe.recipe.healthLabels}
        source={recipe.recipe.source}
        url={recipe.recipe.url}
        dietLabels={recipe.recipe.dietLabels}
        servings={recipe.recipe.yield}/>
    ))}
    </div>

    
    </div>
  )
}
export default App;
