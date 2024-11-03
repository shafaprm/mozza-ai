import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';
import { motion } from 'framer-motion';

// Components
import aiProfile from '../../assets/aiProfile.png';

const RightChat = ({ showDots }) => {
  return (
    <Container
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.5, delay: 11 }}
    >
      {showDots ? (
        <TypeWriter
          options={{
            autoStart: true,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString('...')
              .pauseFor(2500)
              .deleteAll()
              .start();
          }}
        />
      ) : (
        <h1>d</h1>
      )}

      <ProfileImage src={aiProfile} alt="profile" />
    </Container>
  );
};

// Styled Components
const Container = styled(motion.div)`
  position: absolute;
  right: 10px;
  top: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 2em;
  height: 35px;
  padding: 2px 10px;
  color: #fff;
  font-size: 13px;
  font-weight: 400;
  border: 1px solid #a672a2;
`;

const ProfileImage = styled.img`
  width: 25px;
  border-radius: 50%;
  margin-left: 8px;
`;

export default RightChat;
