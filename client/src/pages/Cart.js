import React, { Fragment, useContext, useEffect, useState } from 'react';
import NavBar from '../components/navBar/navBar';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styled from "styled-components";
import Footer from '../components/home/Footer'
import { mobile } from "../constants/responsive";
// import CheckoutButton from '../components/cart/checkout';
import axios from 'axios';
import { CartContext, UserContext } from '../App';
import { IconButton } from '@mui/material';
import * as ROUTES from '../constants/routes';
import { useNavigate } from 'react-router-dom';

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}  
`;


const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

// const TopTexts = styled.div`
//   ${mobile({ display: "none" })}
// `;


// const TopText = styled.span`
//   text-decoration: underline;
//   cursor: pointer;
//   margin: 0px 10px;
// `;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;


const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;


const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

// const ProductColor = styled.div`
//   width: 20px;
//   height: 20px;
//   border-radius: 50%;
//   background-color: ${(props) => props.color};
// `;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;


const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;


const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  cursor:pointer;
`;


export default function Cart() {

  const {cartContext, setCartContext} = useContext(CartContext)
  const {userContext, setUserContext} = useContext(UserContext)
  const id = userContext?.id;
  const [subtotal,setSubtotal] = useState(Number(0))

  const navigate = useNavigate();

  useEffect(()=>{
    document.title ='Cart';
  },[])

  useEffect(()=>{
    if(userContext?.id){
      axios.get(`/api/v1/profile/${id}`)
      .then((response)=>{
        if(response.data.data.profile.cart){
          setCartContext(response.data?.data?.profile?.cart)
        }else{
          setCartContext([])
        }
      }).catch((error)=>{
          console.log(error);
      })
    }
  },[userContext])

  function refreshCart(){
    axios.get(`/api/v1/profile/${id}`)
    .then((response)=>{
      setCartContext(response.data?.data?.profile?.cart)
    }).catch((error)=>{
      console.log(error);
    })
  }


  function stripePay(e){
    e.preventDefault()
    // console.log(cartContext);
    // axios.post("/create-checkout-session",{price,quantity})
    axios.post("/create-checkout-session",{subtotal,cartContext})
    .then((resp)=>{
      if (resp.data.url) {
        window.location.href = resp.data.url;
      }
    }).catch((error)=>{
        console.log(error);
    })
  }

  function getSubtotal(){
    let sub = 0;
    cartContext.map((item,index)=>(
      sub += (item.quantity * item.itemid.price)
    ))
    setSubtotal(sub)
  }

  useEffect(()=>{
    if(cartContext?.length > 0){
      getSubtotal();
    }
  },[cartContext])


  function incQuantity(itemid,quantity){
    let newQuantity = quantity+1;
    axios.put(`/api/v1/profile/cart`,{
      ownerid: id,
      itemid: itemid,
      quantity: newQuantity
    })
    .then((response)=>{
      // console.log(response);
      refreshCart();
    }).catch((error)=>{
      console.log(error);
    })
  }


  function decQuantity(itemid,quantity){
    let newQuantity = quantity-1;

    if (newQuantity === 0) {
      axios.delete(`/api/v1/profile/cart`,{
        headers:{
          ownerid: id,
          itemid: itemid,
        }
      })
      .then((response)=>{
        // console.log(response);
        refreshCart();
      }).catch((error)=>{
        console.log(error);
      })
    } else {
      axios.put(`/api/v1/profile/cart`,{
        ownerid: id,
        itemid: itemid,
        quantity: newQuantity
      })
      .then((response)=>{
        // console.log(response);
        refreshCart();
      }).catch((error)=>{
        console.log(error);
      })
    }
  }

  // if(userContext?.id){

  // }

  // return (
    return cartContext?.length===0 || cartContext === false || cartContext=== null ? (
      <>
      <NavBar />
      <Wrapper>
        <Title>Your Cart is empty</Title>
        <Top>
          <TopButton style={{margin:"auto"}} onClick={()=>{navigate(ROUTES.BROWSE)}}>CONTINUE SHOPPING</TopButton>
        </Top>
      </Wrapper>
      </>
    ) : (
    <Fragment>
    <Container>
      <NavBar />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton onClick={()=>{navigate(ROUTES.BROWSE)}}>CONTINUE SHOPPING</TopButton>
          {/* <TopTexts> */}
            {/* <TopText>Shopping Bag(2)</TopText> */}
            {/* <TopText>Your Wishlist (0)</TopText> */}
          {/* </TopTexts> */}
          <TopButton type="filled" onClick={(e)=>{stripePay(e)}}>CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
              {cartContext?.map((item,index)=>(
            <Product key={index}>
              <ProductDetail>
                <Image src={item.itemid.imageurl.imageurl1} />
                <Details>
                  <ProductName>
                    <b>Product:</b> {item.itemid.name}
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> {item.itemid.itemid}
                  </ProductId>
                  {/* <ProductColor color="black" /> */}
                  {item.itemid.isVariant && 
                  <ProductSize>
                    <b>{item.itemid.variantName}:</b> {item.variant}
                  </ProductSize>
                  }
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountContainer>
                  <IconButton onClick={()=>{incQuantity( item.itemid._id , item.quantity)}}>
                  <AddIcon />
                  </IconButton>
                  <ProductAmount>{item.quantity}</ProductAmount>
                  <IconButton onClick={()=>{decQuantity( item.itemid._id , item.quantity)}}>
                  <RemoveIcon />
                  </IconButton>
                </ProductAmountContainer>
                <ProductPrice>{item.itemid.price}$</ProductPrice>
              </PriceDetail>
            </Product>
              ))}
            <Hr />
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {subtotal}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>$ -5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {subtotal}</SummaryItemPrice>
            </SummaryItem>
            <Button onClick={(e)=>{stripePay(e)}}>CHECKOUT NOW</Button>
            {/* <CheckoutButton /> */}
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
    </Fragment>
  );
};


// Stripe API Documentation
// https://stripe.com/docs/checkout/quickstart
// https://stripe.com/docs/api/charges/list
// https://stripe.com/docs/api/checkout/sessions
// https://stripe.com/docs/payments/accept-a-payment
// https://stripe.com/docs/payments/accept-a-payment?integration=checkout

// Helpfull Links: 
// https://www.youtube.com/watch?v=72iEz5iopqQ
// https://github.com/chaoocharles/complete-ecommerce-react-node