import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartCheckoutOutlined } from '@mui/icons-material';
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info >
                <Icon>
                    <ShoppingCartCheckoutOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}


const Info = styled.div`
z-index: 3;
width: 100%;
height: 100%;
top: 0;
left: 0;
position: absolute;
background-color: rgba(0, 0, 0, 0.2);
display: flex; 
align-items: center;
justify-content: center;
opacity: 0;
transition: all 0.5s ease;
cursor: pointer;
`;

const Container = styled.div`
flex:1;
margin: 5px;
min-width: 280px;
height: 350px;
display: flex;
align-items: center;
justify-content: center;
background-color: #f5fbfd;
position: relative;

&:hover ${Info}{
    opacity: 1;
}
`;

const Circle = styled.div`
width: 200px;
height: 200px;
border-radius: 50%;
background-color: white;
position: absolute;
`;

const Image = styled.img`
height: 75%;
z-index: 2;
`;

const Icon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex; 
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;

&:hover{
    background-color: #e9f5f5;
    transform: scale(1.1);
}
`;

export default Product;