import React from 'react'
import { TextField, Button } from '@mui/material'
function Main() {
  const [ingredients, setIngrediants] = React.useState([]);

  const listItems = ingredients.map((ingredient) =>
    <li key={ingredient}>{ingredient}</li>
  );

  function handlesubmit(e) {
    console.log("submitting form");
    e.preventDefault();
    const formdata  = new FormData(e.currentTarget);
    const newingredient = formdata.get('ingredient');
    setIngrediants(prev => [...prev, newingredient]);
    
  }
  return (
    <main>
    <form className='form'  onSubmit={handlesubmit}>
        <TextField id="outlined-basic" label="e.g oregano" variant="outlined" name='ingredient' />
        <Button variant="contained" type='submit'>Add Ingredient</Button>
    </form> 
    <ul className='list-items'>
    <div>{listItems}</div>
    </ul>
  </main >
  )
}

export default Main