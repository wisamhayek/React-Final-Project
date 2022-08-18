import React from 'react'

import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import PhoneIcon from '@mui/icons-material/Phone';
import InstagramIcon from '@mui/icons-material/Instagram';
import RoomIcon from '@mui/icons-material/Room';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import styled from "styled-components";
import { mobile } from "../../constants/responsive";
import { Link } from 'react-router-dom';
  
  const Container = styled.div`
    display: flex;
    background-color: black;
    color: white;
    ${mobile({ flexDirection: "column" })}    
  `;

  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}    
  `;

  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#000000" })}  
  `;
  
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
//   const Payment = styled.img`
//       width: 50%;
//   `;
  
export default function Footer() {
    return (
        <Container>
        <Left>
            <Logo>W&T Inc.</Logo>
            <Desc>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don’t look even slightly believable.
            </Desc>
            <SocialContainer>
            <SocialIcon color="3B5999">
                <FacebookIcon />
            </SocialIcon>
            <SocialIcon color="E4405F">
                <InstagramIcon />
            </SocialIcon>
            <SocialIcon color="55ACEE">
                <TwitterIcon />
            </SocialIcon>
            <Link to={"/https://github.com/wisamhayek"}>
            <SocialIcon color="000000">
                <GitHubIcon />
            </SocialIcon>
            </Link>
            <Link to={"www.linkedin.com/in/wisam-hayek"}>
            <SocialIcon color="0a66c2">
                <LinkedInIcon />
            </SocialIcon>
            </Link>
            </SocialContainer>
        </Left>
        <Center>
            <Title>Useful Links</Title>
            <List>
            <ListItem><Link to={"/"}>Home</Link></ListItem>
            <ListItem><Link to={"/cart"}>Cart</Link></ListItem>
            <ListItem><Link to={"/profile"}>Profile</Link></ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
            <RoomIcon style={{marginRight:"10px"}}/>Vancouver, Canada
            </ContactItem>
            <ContactItem>
            <PhoneIcon style={{marginRight:"10px"}}/> +1 236 5** ***
            </ContactItem>
            <ContactItem>
            <MailOutlineIcon style={{marginRight:"10px"}} /> w&t@sales.com
            </ContactItem>
            {/* <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" /> */}
        </Right>
        </Container>
    );
};
  