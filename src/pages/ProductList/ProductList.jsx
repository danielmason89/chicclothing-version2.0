import styled from "styled-components";
import Navbar from "../../components/Navbar/Navbar";
import Announcement from "../../components/Announcement/Announcement";
import Products from "../../components/Products/Products";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";
import { mobile } from "../../responsive.js";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState({});
    const [sort, setSort] = useState("newest");

    const handleFilters = (e) => {
        const value = e.target.value;
        setFilters({
            ...filters,
            [e.target.name]: value,
        });
    };
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Title>{cat}</Title>
            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products:</FilterText>
                    <Select name="color" onChange={handleFilters} defaultValue={'DEFAULT'}>
                        <Option value="DEFAULT" disabled>
                            Color
                        </Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select name="size" onChange={handleFilters} defaultValue={'DEFAULT'}>
                        <Option value="DEFAULT" disabled>
                            Size
                        </Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products:</FilterText>
                    <Select onChange={(e) => setSort(e.target.value)}>
                        <Option value="newest">Newest</Option>
                        <Option value="asc">Price (asc)</Option>
                        <Option value="desc">Price (desc)</Option>
                    </Select>
                </Filter>
            </FilterContainer>
            <Products cat={cat} filters={filters} sort={sort} />
            <NewsLetter />
            <Footer />
        </Container>
    )
}

const Container = styled.div`
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`
const Filter = styled.div`
margin:20px;
${mobile({
    margin: "0px 20px",
    display: "flex",
    flexDirection: "column"
})}
`

const FilterText = styled.span`
font-size: 20px;
font-weight: 600;
margin-right: 20px;
${mobile({
    marginRight: "0px"
})}

`

const Select = styled.select`
padding: 10px;
margin-right: 20px;
${mobile({
    margin: "10px 0px"
})}
`
const Option = styled.option``

const Title = styled.h1`
margin:20px;`

export default ProductList
