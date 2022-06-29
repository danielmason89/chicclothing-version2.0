import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

const Navbar = () => {
    return (
        <StyledNavbar>
            <Wrapper>
                <Left>
                    <Language>
                        EN
                    </Language>
                    <SearchContainer>
                        <Input />
                        <Search style={{ color: "gray", fontSize: "16" }} />
                    </SearchContainer>
                </Left>
                <Center>
                    <Logo>Chic - Clothing</Logo>
                </Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge >
                    </MenuItem>
                </Right>
            </Wrapper>
        </StyledNavbar>
    )
}

const StyledNavbar = styled.nav`
height: 60px;
margin-top: 20px;
`;

const Wrapper = styled.div`
paddinG: 10px 20px;
display: flex;
align-items: center;
justify-content: space-between;
`;

const Left = styled.div`
flex: 1;
display: flex;
align-items: center;
`;

const Language = styled.span`
font-size: 14px;
cursor: pointer;
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
`;

const Logo = styled.h1`
font-weight: bold;

`;

const MenuItem = styled.div`
font-size: 14px;
cursor: pointer;
margin-left: 25px;`

const Right = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;`

const Center = styled.div`
flex: 1;
text-align: center;
cursor: pointer;`


export default Navbar;
