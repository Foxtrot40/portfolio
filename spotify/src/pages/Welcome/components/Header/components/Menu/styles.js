import styled from 'styled-components';

export const Container = styled.div`
  width: 6%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 5% 0;
`;
export const MenuLayer = styled.div`
  border: 1.5px solid white;
  width: 100%;
  transform: rotate(${({ rotate }) => rotate || 0});
  transition-duration: 2s;
`;
