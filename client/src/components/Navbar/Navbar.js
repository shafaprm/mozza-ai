import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.jpg';

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Shell>
          <Logo src={logo} alt="Mozza Logo" />
          <TextLogo to="/">
            <p>Mozza</p>
          </TextLogo>
        </Shell>
        <DemoText to="/login">
          Sign In
        </DemoText>
      </Wrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 8vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0;
  border-bottom: 2px solid;
  border-color: rgba(238, 238, 238, 0.1);
`;

const Shell = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 6vw;
  margin-left: 110px;
`;

const Logo = styled.img`
  width: 35px;
`;

const Wrapper = styled.div`
  width: 76%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-style: none dashed none dashed;
  border-color: rgba(238, 238, 238, 0.1);
  border-width: 2px;
`;

const TextLogo = styled(Link)`
  font-size: 19px;
  letter-spacing: 1px;
  font-weight: 400;
  text-decoration: none;
  color: #fff;

  &:hover {
    opacity: 0.7;
    transition: all 0.1s ease-in-out;
  }
`;

const DemoText = styled(Link)`
  font-size: 17px;
  font-weight: 400;
  text-decoration: none;
  margin-right: 110px;
  color: #fff;

  &:hover {
    opacity: 0.7;
    transition: all 0.1s ease-in-out;
  }
`;

export default Navbar;
