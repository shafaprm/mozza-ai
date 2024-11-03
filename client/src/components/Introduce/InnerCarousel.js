import styled from "styled-components";
import { motion } from "framer-motion";

//images
import emandMostaque from "../../assets/emandMostaque.webp";
import ericSchmidt from "../../assets/ericSchmidt.webp";
import feiFeiLi from "../../assets/feiFeiLi.webp";
import gregBrockman from "../../assets/gregBrockman.webp";
import nadFriedman from "../../assets/nadFriedman.webp";
import shafa from '../../assets/shafa.png'
import ajax from '../../assets/ajax.png'
import zul from '../../assets/zul.png'
import vio from '../../assets/vio.png'
import clain from '../../assets/clain.png'


//Components
import CardItem from "./CardItem.js";

const InnerCarousel = () => {
  const imagesObj = [
    {
      image: shafa,
      alt: "Greg Brockman Profile Picture",
      name: "M. Shafa Praramadhana",
      title: "The Future of LLMs, Foundation & Generative Models",
    },
    {
      image: ajax,
      alt: "Eric Schmidt Profile Picture",
      name: "Ajax Falak Santoso",
      title: "Navigating an AI-Enabled Future",
    },
    {
      image: zul,
      alt: "Fei Fei li Profile Picture",
      name: "M. Zul Rezky zaaki",
      title: "Understanding & Interacting With The Real World",
    },
    {
      image: clain,
      alt: "Emad Mostaque Profile Picture",
      name: "Claintont Suyanto",
      title: "Democratizing AI",
    },
    {
      image: vio,
      alt: "Nad Friedman Profie Picture",
      name: "Viorano Arcgis Octara",
      title: "Building AI-Native Products & What's Next For AI",
    },
  ];

  return (
    <Container drag="x" dragConstraints = {{right: 0, left: -1500}} dragTransition={{ bounceStiffness: 0, bounceDamping: 0 }} dragElastic={0}>
      {imagesObj.map((obj, index) => {
        return <CardItem obj={obj} key={index} />;
      })}
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 200%;
  /* overflow-x: scroll; */
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 100px;
`;

export default InnerCarousel;
