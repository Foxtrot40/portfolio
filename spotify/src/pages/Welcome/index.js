import React, { useState } from 'react';
import { Header } from './components';

const Welcome = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Header menu={{ menuOpen, setMenuOpen }} />
    </>
  );
};

export default Welcome;
