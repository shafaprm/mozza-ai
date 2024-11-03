import styled from 'styled-components'
import {motion} from 'framer-motion';
import {BsFillPlayCircleFill} from 'react-icons/bs'

const CardItem = ({obj}) => {
    return (
        <Item>
            <LeftWrapper>
                <Profile src = {obj.image} alt = {obj.alt} />
            </LeftWrapper>
            <RightWrapper>
                    <HeadingText>Mozza Developer</HeadingText>
                    <Title>{obj.title}</Title>
                    <NameText>By {obj.name}</NameText>
            </RightWrapper>
        </Item>
    )
}

const Item = styled(motion.div)`
    z-index: 4;
    margin-right: 40px;
    width: 25%;
    height: 50%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-style: solid;
    border-color: rgba(238, 238, 238, 0.1);
    border-width : 0.2px;
    border-radius: 8px;
    overflow: hidden;
    position: relative;
    padding-right: 8px;
    cursor: pointer;
`


const LeftWrapper = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-end;
`

const RightWrapper = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    padding: 0 6px;
`

const Title = styled.h2`
    font-size: 20px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 10px;
`

const HeadingText = styled.p`
    color: #A672A2;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 4px;
`

const Profile = styled.img`
    width: 100%;
`

const NameText = styled.h3`
    color: #b2b2b2;
    font-size: 12px;
    font-weight: 500;
`

export default CardItem;