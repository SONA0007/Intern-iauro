import React from "react";
import { Typography } from '@mui/material';
import meme from '../images/meme.png';

function Header() {
  return (
    <header>
        <img src={meme} alt="icon" />
        <Typography variant="h2">Meme Generator</Typography>
    </header>
  );
}

export default Header;
