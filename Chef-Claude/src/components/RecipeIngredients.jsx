import React from 'react'
import { Button } from '@mui/material'

function RecipeIngredients(props) {
    const listItems = props.ingredients.map((ingredient) =>
        <li key={ingredient}>{ingredient}</li>
      );
  return (
    <div>
        <section>
          <h1 style={{textAlign: 'center'}}>Ingredients in Hand : </h1>
          <ul className='list-items'>
            <div>{listItems}</div>
          </ul>
          {props.ingredients.length>3 && <div className="get-recipe-container">
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
            <Button variant="outlined" onClick={props.toggleRecipe}>Get Recipe</Button>
          </div>}
        </section>
    </div>
  )
}

export default RecipeIngredients