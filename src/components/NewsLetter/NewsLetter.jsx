import { Send } from '@mui/icons-material';
import styled from 'styled-components';

const NewsLetter = () => {
    return (
        <Container>
            <Title>NewsLetter</Title>
            <Description>Get chic updates from your favorite products.</Description>
            <InputContainer>
                <Input placeholder="Your email" />
                <Button>
                    <Send />
                </Button>


            </InputContainer>


        </Container>
    )
}

const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

const Title = styled.h1`
font-size: 70px;
margin-bottom: 20px;
`

const Description = styled.div`
font-size: 24px;
font-weight: 100;
margin-bottom: 20px;
`

const InputContainer = styled.div`
width: 50%;
height: 40px;
background-color: white;
display: flex;
justify-content: space-between;
border: 1px solid lightgrey;
`

const Input = styled.input`
border: none;
flex: 8;
padding-left: 20px;
`

const Button = styled.button`
flex: 0.5;
cursor: pointer;
border: none;
background-color: teal;
color: white;
`

export default NewsLetter;
