import React from 'react'
import { TextField, Button, Typography } from '@mui/material'

function MemeGenerator() {
  const[memes, setMemes] = React.useState({
    topText: 'OKay',
    bottomText: 'done',
    randomImg: 'http://i.imgflip.com/1bij.jpg',
  })
  const [allMemesImgs, setAllMemesImgs] = React.useState([])

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(response => response.json())
      .then(data => setAllMemesImgs(data.data.memes) )
  },[])

  
  function handleChange(event) {
    const {name, value} = event.currentTarget
    setMemes(prevMemes => {
      return {
        ...prevMemes,
        [name]: value
      }
      })
  }

  
  return (
    <main>
    <div className='form'>
      <label>
      <Typography variant="h6">Top Text</Typography>
      <TextField 
      id="standard-basic" 
      aria-label="Top Text" 
      name="topText"
      value={memes.topText}
      variant="standard" 
      placeholder='Top Text'
      onChange={handleChange}/>
      </label>
      
      <label>
        <Typography variant="h6">Bottom Text</Typography>
        <TextField
          id="standard-basic"
          variant="standard"
          name='bottomText'
          placeholder='Bottom Text'
          value={memes.bottomText}
          aria-label='Bottom Text'
          onChange={handleChange}
        />
      </label>
      <Button type="Secondary" onClick={getRandomMeme}>Get a new meme image</Button>
      </div>
      <div className="meme">
        <img src={memes.randomImg} alt=''/>
        <span className="top">{memes.topText}</span>
        <span className="bottom">{memes.bottomText}</span>
      </div>
    </main>
  )
}

export default MemeGenerator