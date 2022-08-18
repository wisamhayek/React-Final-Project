import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import axios from 'axios';
import React, { Fragment, useContext, useEffect, useState } from 'react'
// import styled from 'styled-components';
import { CartContext, UserContext } from '../../App';
import LoginModal from '../navBar/loginModal';
// import ColorButton from './buttons'

// const StyledButton = styled(Button)`
//   background-color: grey;
//   color: #fff;
//   padding: 6px 12px;
//   &:hover {
//     background-color: #blue;
//   }
//   &:focus {
//     background-color: red;
//   }
// `;


export default function Variants({item}) {
  const {userContext, setUserContext} = useContext(UserContext);
  const {cartContext, setCartContext} = useContext(CartContext);
  const id = userContext?.id;

  const [options,setOptions] = useState([])
  const [chosenItem,setChosenItem] = useState("")

  useEffect(()=>{
    if(item?.isVariant){
      const entries = Object.values(item.variants);
      // console.log(entries);
      setOptions(entries)
      setChosenItem("")
    }
  },[item])

  let outofstock = chosenItem.length === 0 || chosenItem.quantity === 0

  useEffect(()=>{
    console.log(chosenItem);
    console.log(item._id);
  },[chosenItem])


  function addToCart(){
    // console.log(id);
    // console.log(chosenItem);
    // console.log(item._id);
    axios.post(`http://localhost:2000/api/v1/profile/cart`,{
      ownerid: id,
      itemid: item._id,
      quantity: 1,
      variant: chosenItem
    })
      .then((response)=>{
        console.log(response.data.message);
      }).catch((error)=>{
        console.log(error);
    })
  }


  function refreshCart(){
    axios.get(`http://localhost:2000/api/v1/profile/${id}`)
    .then((response)=>{
      console.log(response.data.data.profile.cart);
      setCartContext(response.data.data.profile.cart)
    }).catch((error)=>{
        console.log(error);
    })
  }

  function addCartButton(){
    addToCart();
    refreshCart();
  }

  return (
    <Fragment>

    {item.isVariant
    // if yes
      ? 
      <Box sx={{padding:"8px",display:"flex",flexDirection:"column",rowGap:"1rem",justifyContent:"space-around"}}>

      {/* Title */}
      <Box>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='caption' color={"gray"}>{item.category}</Typography>
      </Box>


      {/* Variant */}
      <Box sx={{display:"flex",flexDirection:"row", alignItems: "center",columnGap:"1rem",marginTop:"1rem"}}>
        <Typography variant="h6">{item.variantName} :</Typography>
        <Typography  variant='body1' color={"#1976d2"}>{chosenItem}</Typography>
      </Box>
      {/* <Box sx={{display:"flex",flexDirection:"row",columnGap:"8px"}}> */}
      <Box sx={{display:"grid",gridTemplateColumns: "1fr 1fr 1fr 1fr" ,columnGap:"8px",width:"fit-content",rowGap:"4px"}}>
        {options.map((option,index)=>(
          <Button key={index} sx={{borderRadius:"50%",color:"white",bgcolor:"black",aspectRatio:"1/1",width:"64px",height:"64px"}} onClick={()=>{
            setChosenItem(option.variantTitle)
          }}>{option?.variantTitle}</Button>
        ))}
      </Box>
      

      {/* Price & Cart */}
      <Box sx={{marginTop:"3rem",display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <Typography variant='h5'>{item.price}$</Typography>
        <Button disabled={outofstock} variant='contained' onClick={()=>{
          addCartButton();
        }}>Add to Cart</Button>
      </Box>
      </Box>



      // If not
      :
      <Box sx={{padding:"8px",display:"flex",flexDirection:"column",rowGap:"1rem",justifyContent:"space-around"}}>
      {/* Title */}
      <Box>
        <Typography variant='h5'>{item.name}</Typography>
        <Typography variant='caption' color={"gray"}>{item.category}</Typography>
      </Box>

      {/* Price & Cart */}
      <Box sx={{marginTop:"3rem",display:"flex",flexDirection:"row", justifyContent:"space-between"}}>
        <Typography variant='h5'>{item.price}$</Typography>
        {userContext?.id ? 
          <Button variant='contained' onClick={()=>{addCartButton()}}>Add to Cart</Button>
        :
          <LoginModal text="Login to add to cart"/>
        }
      </Box>
      </Box>
    }
    </Fragment>
  )
}


// Make reusable button for variants colors
// Make the Variant buttons a RadioButton - Only choose one


//  {/* Variant 1 */}
//    <Box sx={{display:"flex",flexDirection:"row", alignItems: "center",columnGap:"1rem"}}>
//    <Typography variant="h6">{item.variantName} :</Typography>
//    <Typography  variant='body1' color={"blue"}>The Choseen one</Typography>
//  </Box>
//  <Box sx={{display:"flex",flexDirection:"row",columnGap:"8px"}}>
//    {/* <ColorButton color="black"/> */}
//    <Button sx={{borderRadius:"50%",color:"white",bgcolor:"red",aspectRatio:"1/1"}}>Red</Button>
//    <Button sx={{borderRadius:"50%",color:"white",bgcolor:"blue",aspectRatio:"1/1"}}>Blue</Button>
//    <Button sx={{borderRadius:"50%",color:"white",bgcolor:"Black",aspectRatio:"1/1"}}>Black</Button>
//    <Button sx={{borderRadius:"50%",color:"black",bgcolor:"white",aspectRatio:"1/1"}}>White</Button>
//  </Box>