import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
`;

const SearchBar = styled.input`
  width: 100%;
  max-width: 500px;
  padding: 8px;
  margin-bottom: 16px;
  border-radius: 4px;
  border: none;
  background-color: #ffffff;
  font-size: 16px;
  color: #555555;
`;

const ProductList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 32px;
  width: 100%;
  max-width: 1200px;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #ffffff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.15);
`;

const ProductImage = styled.img`
  height: 200px;
  object-fit: contain;
  margin-bottom: 16px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const ProductDetails = styled.p`
  font-size: 14px;
  color: #555555;
  margin-bottom: 8px;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: bold;
`;

const ProductListing = () => {
  return (
    <Container>
      <SearchBar type='text' placeholder='Search for products' />
      <ProductList>
        <ProductCard>
          <ProductImage
            src='https://via.placeholder.com/250x200'
            alt='Product'
          />
          <ProductName>Product 1</ProductName>
          <ProductDetails>Details about Product 1</ProductDetails>
          <ProductPrice>Rs. 100</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src='https://via.placeholder.com/250x200'
            alt='Product'
          />
          <ProductName>Product 2</ProductName>
          <ProductDetails>Details about Product 2</ProductDetails>
          <ProductPrice>Rs. 150</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src='https://via.placeholder.com/250x200'
            alt='Product'
          />
          <ProductName>Product 3</ProductName>
          <ProductDetails>Details about Product 3</ProductDetails>
          <ProductPrice>Rs. 200</ProductPrice>
        </ProductCard>
        <ProductCard>
          <ProductImage
            src='https://via.placeholder.com/250x200'
            alt='Product'
          />
          <ProductName>Product 4</ProductName>
          <ProductDetails>Details about Product 4</ProductDetails>
          <ProductPrice>Rs. 250</ProductPrice>
        </ProductCard>
      </ProductList>
    </Container>
  );
};

export default ProductListing;
