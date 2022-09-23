import Typography from '@mui/material/Typography';
import './Header.css'
// Kalian bisa menambahkan CSS di src/components/Header.css
// atau langsung tambahkan dengan sx={{}}
import React from 'react';

// Header berisi judul dan subtitle
// Judul: Call a Friend
// Subtitle: Your friendly contact app
const Header = () => {
  return (
    <>
    <Typography variant="h2">Call a Friend</Typography>
    <Typography variant='overline' className='subtitle'>Your friendly contact app</Typography>
    </>
  );
};

export default Header;
