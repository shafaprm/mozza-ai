import styled from 'styled-components';
import TypeWriter from 'typewriter-effect';

const AnimatedText = ({ text1, text2, text3 }) => {
  return (
    <Container aria-label={`Animated text: ${text1}, ${text2}, ${text3}`}>
      <TypeWriter
        options={{
          autoStart: true,
          loop: true
        }}
        onInit={(typewriter) => {
          typewriter
            .typeString(text1)
            .pauseFor(3000)
            .deleteAll()
            .typeString(text2)
            .pauseFor(3000)
            .deleteAll()
            .typeString(text3)
            .pauseFor(3000)
            .deleteAll()
            .start();
        }}
      />
    </Container>
  );
};

const Container = styled.div`
  font-size: 90px;
  font-weight: 300;
  color: #fff;
  background: linear-gradient(to right, #cf70c5 0%, #99b8cf 57%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  /* Media queries for responsive text size */
  @media (max-width: 1200px) {
    font-size: 70px;
  }

  @media (max-width: 900px) {
    font-size: 50px;
  }

  @media (max-width: 600px) {
    font-size: 35px;
  }
`;

export default AnimatedText;
