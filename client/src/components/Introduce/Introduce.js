import styled from 'styled-components';
import { motion } from 'framer-motion';

// Components
import ChatBox from './ChatBox.js';
import Heading from './Heading.js';
import InnerCarousel from './InnerCarousel.js';

const Introduce = () => {
  return (
    <Container>
      <HeadingWrapper>
        <Heading />
        <ChatBox />
      </HeadingWrapper>
      <CarouselWrapper>
        <InnerCarousel />
      </CarouselWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: 100%; /* Changed from 100vw to 100% */
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  border-style: none none dashed none;
  border-color: rgba(238, 238, 238, 0.1);
  border-width: 2px;
`;

const HeadingWrapper = styled.div`
  width: 76%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  border-style: none dashed none dashed;
  border-color: rgba(238, 238, 238, 0.1);
  border-width: 2px;
`;

const CarouselWrapper = styled(motion.div)`
  width: 76%;
  padding-top: 60px;
  border-style: none dashed none dashed;
  border-color: rgba(238, 238, 238, 0.1);
  border-width: 2px;
  padding-bottom: 80px;
`;

export default Introduce;
