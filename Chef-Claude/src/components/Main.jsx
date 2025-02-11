import React, { Fragment } from 'react'
import { TextField, Button } from '@mui/material'
import RecipeIngredients from './RecipeIngredients';
import CloudeRecipe from './ClaudeRecipe';

function Main() {

  const [ingredients, setIngrediants] = React.useState([]);
  const [recipeshown, setRecipe] = React.useState(false);


  // function handlesubmit(e) {
  //   console.log("submitting form");
  //   e.preventDefault();
  //   const formdata  = new FormData(e.currentTarget);
  //   const newingredient = formdata.get('ingredient');
  //   setIngrediants(prev => [...prev, newingredient]);

  // }

  // using action attribute in form tag
  function handleSubmit(formData) {
    const newIngredient = formData.get("ingredient")
    setIngrediants(prevIngredients => [...prevIngredients, newIngredient])
    console.log("added element")
  }
  function toggleRecipe() {
    setRecipe(prevShown => !prevShown) 
  }
  
  return (
    <Fragment>
      <form className='form' action={handleSubmit}>
        <TextField
          id="outlined-basic"
          label="e.g oregano"
          variant="outlined"
          name='ingredient'
          required minLength="2"
          />
          
        <Button variant="contained" type='submit'>Add Ingredient</Button>
      </form>
      <main>
        {/* conditional rendering  */}
        {ingredients.length > 0 ?
        <RecipeIngredients  ingredients={ingredients} toggleRecipe={toggleRecipe} /> : null}
       { recipeshown && <CloudeRecipe />}
      </main >
    </Fragment>
  )
}

export default Main