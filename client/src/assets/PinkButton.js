import styled from 'styled-components';
import { FiArrowRight } from "react-icons/fi";
import {Link} from 'react-router-dom'

const PinkButton = ({margin, text}) => {
  return (
    <ButtonLink margin = {margin} to = "#">
      {text}
      <Icon style = {{marginLeft: "4px"}} />
    </ButtonLink>
  )
}

const Icon = styled(FiArrowRight)`
  margin-left: 4px;
`

const ButtonLink = styled(Link)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-weight: 400;
    padding: 10px 18px;
    margin-left: ${(props) => (props.margin ? "20px" : "0")};
    font-size: 16px;
    color: #fff;
    background-color: #A672A2;
    border: none;
    border-radius: 2rem;
    cursor: pointer;
    text-decoration: none;

    &:hover{
      opacity: 0.5;
      transition: all 0.3s ease-in-out;
    }
    &:hover ${Icon}{
        transform: translateX(3px);
        transition: all 0.3s ease;
        animation-fill-mode: forwards;
    }
` 

export default PinkButton;