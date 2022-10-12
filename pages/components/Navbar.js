import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Image from 'next/image';

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: '#000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Image
            src="/logo.svg"
            width={50}
            height={50}
            alt='Logo'
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
