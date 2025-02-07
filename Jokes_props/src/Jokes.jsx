import React from 'react'

export default function Jokes(pros) {
    console.log(pros);
  return (

    <div className='jokes'>
    <div id='jokes-info'>
      <h2>{pros.Setup}</h2>
      <h3>{pros.Punchline}</h3>
      <hr />
    </div>
    </div>
    
  )
}
