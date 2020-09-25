import React, { useState } from 'react';
import RandomSprout from './RandomSprout';
import SproutsIndex from './SproutsIndex';
import LongestRecipe from './LongestRecipe';

const SproutsContainer = (props) => {
  const [recipe, setRecipe] = useState("")
  const [recipes, setRecipes] = useState([])
  const [longestRecipe, setLongestRecipe] = useState("")

  const getRandomRecipe = () => {
    fetch("/api/v1/random-recipe")
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        setRecipe(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

    const getLongestRecipe = () => {
      fetch("/api/v1/longest-name")
        .then(response => {
          if (response.ok) {
            return response;
          } else {
            let errorMessage = `${response.status} (${response.statusText})`,
            error = new Error(errorMessage);
            throw(error);
          }
        })
        .then(response => response.json())
        .then(body => {
          setLongestRecipe(body)
        })
        .catch(error => console.error(`Error in fetch: ${error.message}`))
      }


  const getAllRecipes = () => {
    fetch("/api/v1/recipes")
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(body => {
        setRecipes(body)
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`))
    }

  const handleRandomClick = () => {
    getRandomRecipe();
    setRecipes([]);
    setLongestRecipe("")
  }

  const handleIndexClick = () => {
    getAllRecipes();
    setRecipe("");
    setLongestRecipe("")
  }

  const handleLongestClick = () => {
    getLongestRecipe();
    setRecipe("");
    setRecipes([])
  }

  return(
    <div className="container">
      <h1>Sprout Fetcher</h1>
      <RandomSprout
        recipe={recipe}
      />
      <SproutsIndex
        recipes={recipes}
      />
    <LongestRecipe
      recipe={longestRecipe}
    />

      <div className="buttons">
        <button onClick={handleRandomClick} className="btn">Get Random Recipe</button>

        <button onClick={handleIndexClick} className="btn">See All Recipes</button>

        <button onClick={handleLongestClick} className="btn">See The Looooongest Recipe</button>
      </div>
    </div>
  )
}

export default SproutsContainer;
