import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate,
} from "react-router-dom";
import styled from "styled-components";
import Search from "./plugins/Search";
import AddProduct from "./components/logged_in_business_user/Addproduct";
import Cart from "./components/logged_in_user/Cart";
import Login from "./components/common/Login";
import Payment from "./components/logged_in_business_user/Payment";
import Product from "./components/Product";
import ProductListing from "./components/ProductListing";
import Registration from "./components/logged_in_business_user/Registration";
import Shop from "./components/logged_in_business_user/Shop";
import Categories from "./plugins/Categories";
import ProductListDummy from "./components/Dummydata";
import "./components/Dummydata.css";

const LayoutWrapper = styled.div`
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
`;

const HeaderWrapper = styled.header`
  background-color: #3f51b5;
  color: #fff;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const NavLink = styled(Link)`
  color: #fff;
  margin-right: 1rem;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const Logo = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

const MainWrapper = styled.main`
  padding-top: 4rem;
`;

const FooterWrapper = styled.footer`
  background-color: #f2f2f2;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Address = styled.p`
  margin: 0;
`;

const Phone = styled.p`
  margin: 0;
`;

const ChatButton = styled.button`
  background-color: #3f51b5;
  border: none;
  border-radius: 50%;
  color: #fff;
  font-size: 1.5rem;
  height: 50px;
  width: 50px;

  &:hover {
    cursor: pointer;
  }
`;

const App = ({ children }) => {
  const navigate = useNavigate();
  return (
    <LayoutWrapper>
      <HeaderWrapper>
        <Nav className='Nav'>
          <NavLink to={"/"} className='NavLink'>
            Home
          </NavLink>
          <NavLink to={"/products"} className='NavLink'>
            Products
          </NavLink>
          <NavLink to={"/shop"} className='NavLink'>
            Shop
          </NavLink>
          <NavLink to={"/login"} className='NavLink'>
            Login
          </NavLink>
          <NavLink to={"/addproduct"} className='NavLink'>
            Add Products
          </NavLink>
          <NavLink to={"/payment"} className='NavLink'>
            Payment
          </NavLink>
          <NavLink to={"/registration"} className='NavLink'>
            Registration
          </NavLink>
        </Nav>
        <div className='SearchCategories'>
          <span>Search Categories </span>
          <Categories />
        </div>
        <div className='Search'>
          <Search />
        </div>
        <Logo className='Logo'>Virtual Shoppy</Logo>
        <div className='Cart' onClick={() => navigate("/login")}>
          <img
            src='https://www.freepnglogos.com/uploads/shopping-cart-png/shopping-cart-png-transparent-image-pngpix-11.png'
            alt='Cart'
            style={{ width: "70px" }}
          />
          <span>00</span>
        </div>
      </HeaderWrapper>
      <MainWrapper>
        <Routes>
          <Route path='/' element={<ProductListing />} />

          <Route
            path='/products'
            element={<Product product={ProductListDummy} />}
          />

          <Route path='/shop' element={<Shop />} />

          <Route path='/login' element={<Login />} />
          <Route path='/addproduct' element={<AddProduct />} />
          {/* <Route path="/cart" element={<Cart />} /> */}
          <Route path='/payment' element={<Payment />} />
          <Route path='/registration' element={<Registration />} />
        </Routes>

        {children}
      </MainWrapper>
      <FooterWrapper>
        <div>
          <Address>123 Main St</Address>
          <Address>Anytown, USA 12345</Address>

          <Phone>Customer Care: 1-800-555-5555</Phone>
        </div>
        <ChatButton>🤖</ChatButton>
      </FooterWrapper>
    </LayoutWrapper>
  );
};
export default App;
