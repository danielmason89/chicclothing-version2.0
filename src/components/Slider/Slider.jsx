import React, { useState } from 'react'
import styled from 'styled-components';
import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';
import { sliderItems } from "../../data.js";

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
        }

    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {sliderItems.map((item) => (
                    <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} alt={item.alt} />
                        </ImgContainer>
                        <InfoContainer>
                            <Title>{item.title}</Title>
                            <Description>{item.desc}</Description>
                            <Button>SHOP NOW</Button>
                        </InfoContainer>
                    </Slide>
                ))}
            </Wrapper >
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

const Container = styled.div`
width: 100%;
height: 100vh;
display: flex;
background-color: white; 
position: relative;
overflow: hidden;
`;

const Arrow = styled.div`
width:50px;
height: 50px;
background-color: #fff7f7;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute;
top: 0;
bottom: 0;
left: ${props => props.direction === "left" && "10px"};
right: ${props => props.direction === "right" && "10px"};;
cursor: pointer;
margin: auto;
opacity: 0.5;
z-index: 2;
`;

const Wrapper = styled.div`
height: 100%;
display: flex;
transform: translateX(${props => props.slideIndex * -100}vw);
transition: all 1.5s ease;
`;

const ImgContainer = styled.div`
flex: 1;
height: 100%;

`;
const InfoContainer = styled.div`
flex: 1;
padding: 50px;
`;

const Title = styled.h1`
font-size: 70px;`;

const Description = styled.p`
margin: 50px 0px;
font-size: 25px;
font-weight: 200;
letter-spacing: 3px;
line-height: 1;
`;

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`;


const Slide = styled.div`
display: flex;  
align-items: center;
width: 100vw;
height: 100vh;
background-color: #${props => props.bg};
`;

const Image = styled.img`
height: 80%;
z-index: 1;
border-radius: 0% 70% 70% 0%;
height: 95vh;
`;

export default Slider;