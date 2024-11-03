import styled from "styled-components";

// Components
import LeftChat from "./LeftChat.js";
import RightChat from "./RightChat.js";

const ChatBox = () => {
  return (
    <ConvoCard>
      <Navbar>
        <ButtonGroup>
          <NavButton color="#F6635C" />
          <NavButton color="#FFC436" />
          <NavButton color="#7AA874" />
        </ButtonGroup>
        <NavbarTitle>AI Text Generator</NavbarTitle>
      </Navbar>
      <ChatContainer>
        <LeftChat />
        <RightChat showDots={true} />
      </ChatContainer>
    </ConvoCard>
  );
};

// Styled Components
const ConvoCard = styled.div`
  display: flex;
  position: absolute;
  right: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 28%;
  height: 35%;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transform: translateX(-20px);
  border-radius: 10px;
  margin-left: 50px;
  background-color: #000;
`;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 15px;
  position: relative;
`;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 44px;
  position: absolute;
  left: 10px;
  top: 15px;
`;

const NavButton = styled.div`
  background-color: ${(props) => props.color};
  width: 11px;
  height: 11px;
  border-radius: 50%;
  display: block;
`;

const NavbarTitle = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 400;
`;

const ChatContainer = styled.div`
  width: 100%;
  height: 40%;
  position: relative;
  padding: 20px 10px;
`;

export default ChatBox;
