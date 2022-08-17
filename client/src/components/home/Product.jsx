import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import SearchIcon from '@mui/icons-material/Search';
import styled from "styled-components";
import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 4px;
  min-width: 280px;
  max-width: max-content;
  height: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
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
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }&:visited {
    color: inherit;
  }
`;

export default function Product({item}) {
  return (
    <Container>
      {/* <Circle /> */}
      <Image src={item.imageurl?.imageurl1} />
      <Box sx={{display:"flex",flexDirection:"column",rowGap:"4px"}}>
      <Typography width={{xs:"250px", md: "250px"}} noWrap={true} variant='h6' sx={{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif"}}>{item?.name}</Typography>
      <Typography variant="body1" sx={{fontFamily:"-apple-system, BlinkMacSystemFont, sans-serif",fontSize:"larger",fontWeight:"500",display:"flex",justifyContent:"end"}}>{item.price}$</Typography>
      </Box>
      <Info>
        {/* <Icon>
          <ShoppingCartIcon />
        </Icon> */}
        <Icon>
        <Link to={`/product/${item._id}`}>
          <SearchIcon color='inherit' sx={{textDecoration: "none",fill: "0"}}/>
        </Link>
        </Icon>
        {/* <Icon>
          <FavoriteBorderIcon />
        </Icon> */}
      </Info>
    </Container>
  );
};