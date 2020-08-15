import React from 'react';
import { Container, Spotify, MenuLayer } from './styles';
import Menu from './components/Menu';

const Header = ({ menu }) => (
  <Container>
    <Spotify>Spotify</Spotify>
    <Menu menu={menu} />
  </Container>
);

export { Header };
