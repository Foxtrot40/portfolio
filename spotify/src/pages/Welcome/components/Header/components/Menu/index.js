import React from 'react';
import { Container, MenuLayer } from './styles';

const Menu = ({ menu }) => {
  const { menuOpen, setMenuOpen } = menu;

  return (
    <Container onClick={() => setMenuOpen(!menuOpen)}>
      <MenuLayer rotate="-45deg" />
      <MenuLayer />
      <MenuLayer />
    </Container>
  );
};

export default Menu;
