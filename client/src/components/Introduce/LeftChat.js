import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';

import chatProfile from '../../assets/chatprofile.avif';

const LeftChat = () => {
  return (
    <Container>
      <ProfileImage src={chatProfile} alt="profile" />
      <TypeWriter
        options={{
          autoStart: true,
          loop: true,
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString("Why is human feedback necessary for accurate llm response?")
            .pauseFor(15000)
            .deleteAll()
            .start();
        }}
      />
    </Container>
  );
};

// Styled Components
const Container = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2em;
  border: 1px solid rgba(255, 255, 255, 0.2);
  height: 35px;
  padding: 2px 5px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  background-color: #20262e;
`;

const ProfileImage = styled.img`
  width: 25px;
  border-radius: 50%; /* Changed to 50% for perfect circular profile image */
  margin-right: 8px;
`;

export default LeftChat;
