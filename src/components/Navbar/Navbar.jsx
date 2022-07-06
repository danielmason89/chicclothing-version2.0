import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';
import { mobile } from "../../responsive.js";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";



const Navbar = () => {
    const quantity = useSelector(state => state.cart.quantity);
    return (
        <StyledNavbar>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input placeholder="Search" />
                        <Search style={{ color: "gray", fontSize: "16" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Chic - Clothing</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart">
                        <MenuItem>
                            <Badge badgeContent={quantity} color="primary">
                                <ShoppingCartOutlined />
                            </Badge >
                        </MenuItem>
                    </Link>
                </Right>
            </Wrapper>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
height: 60px;
margin-top: 20px;
${mobile({
    height: "50px"
})}
`;

const Wrapper = styled.div`
paddinG: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({
    padding: "10px 0px"
})}
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
${mobile({
    display: "none"
})}
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgrey;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`;

const Input = styled.input`
border: none;
${mobile({
    width: "50px"
})}
`;

const Logo = styled.h1`
font-weight: bold;
${mobile({
    fontSize: "24px"
})}

`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;
${mobile({
    fontSize: "12px",
    marginLeft: "10px"
})}
`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;
${mobile({
    justifyContent: "center",
    flex: "2"
})}
`

const Center = styled.div`
flex: 1;
text-align: center;
cursor: pointer;`


export default Navbar;
