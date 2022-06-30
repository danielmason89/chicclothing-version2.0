import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Footer from "../../components/Footer/Footer";
import NewsLetter from "../../components/NewsLetter/NewsLetter";

const ProductPage = () => {
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>
                <ImgContainer>
                    <Image src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png" />
                </ImgContainer>
                <InfoContainer>
                    <Title>Jake Guitar Vintage Crusher Tee</Title>
                    <Description>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                        venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
                        iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
                        tristique tortor pretium ut. Curabitur elit justo, consequat id
                        condimentum ac, volutpat ornare.m</Description>
                    <Price>$ 20</Price>
                </InfoContainer>
            </Wrapper>
            <NewsLetter />
            <Footer />
        </Container >
    )
}

const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
`

const ImgContainer = styled.div`
flex: 1;`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

const Title = styled.h1`
font-weight: 200;

`

const Description = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`


export default ProductPage;
