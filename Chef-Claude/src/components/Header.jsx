import React from 'react'
import { Typography } from '@mui/material'
//import chef from '../images/chef.png'
import chef from '../images/chef.png'

function Header() {
  return (
    <header>
      <img src={chef} alt="chef logo" />
      <Typography variant="h3">Chef Claude's Recipes</Typography>
    </header>
  )
}

export default Header