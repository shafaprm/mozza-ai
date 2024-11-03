import styled from "styled-components";
import AnimatedText from "./AnimatedText.js";
import PinkButton from './PinkButton.js';

const Heading = () => {
  return (
    <Container>
      <Text>Manage</Text>
      <AnimatedText
        text1={"Development"}
        text2={"Business"}
        text3={"Content Creation"}
      />
      <Text margin = {true}>With Mozza</Text>
      <Paragraph>
      Mozza AI is your everyday assistant, making tasks easier with real-time, <br />
      intelligent support. Whether it's managing schedules, answering questions, <br />
      or streamlining workflows, Mozza AI adapts to your needs, helping you stay<br />
       organized and efficient throughout the day.
      </Paragraph>
      <ButtonWrapper>
        <PinkButton text = "Try Mozza"/>
      </ButtonWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 65%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
  padding-top: 100px;
`;

const Text = styled.h1`
  font-size: 90px;
  font-weight: 300;
  color: #fff;

  margin-bottom: ${(props) => (props.margin ? "30px" : "0")}
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 30px;
  color: #fff;
`

const ButtonWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 60px;
  width: 50%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export default Heading;
