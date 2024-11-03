import Navbar from '../components/Navbar/Navbar.js'
import Introduce from '../components/Introduce/Introduce.js'

import styled from 'styled-components';

const Landing = () => {
  return (
    <Container>
      <Navbar />
      <Introduce />
    </Container>
  );
};

const Container = styled.div`
  background-color: black;
  width: 100vw;
  overflow-x: hidden; /* Prevents unwanted horizontal scroll */
`;

export default Landing;
