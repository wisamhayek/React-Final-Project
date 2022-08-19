import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
// import { sliderItems } from "../../constants/metaData";
import { mobile, tablet } from "../../constants/responsive";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ height: "" })}
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  background-color: #${(props) => props.bg};
  ${mobile({ height: "auto", gridTemplateColumns:"1fr" })}
  ${tablet({  })}
`;

const ImgContainer = styled.div`
  height: 100%;
  ${mobile({ display: "none" })}
  ${tablet({ height: "auto" })}
`;

const Image = styled.img`
  height: 80%;
  ${mobile({ display: "none" })}
  ${tablet({ width: "100%",height:"auto"})}
`;
// object-fit: cover;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  const navigate = useNavigate();

  const [sliderItems, setSlideItems] = useState("");
  const [slideIndex, setSlideIndex] = useState(0);

  function nextSlide(){
    if(slideIndex === sliderItems.length-1){
        setSlideIndex(0)
    }else{
        setSlideIndex(slideIndex+1)
    }
  }

  function prevSlide(){
    if(slideIndex === 0){
        setSlideIndex(sliderItems.length-1)
    }else{
        setSlideIndex(slideIndex-1)
    }
  }

  function fetchPromotions(){
    //Fetch category and return/ use the first 4
    axios.get(`/api/v1/promotions`)
    .then((response)=>{
      // console.log(response.data.data);
      setSlideItems(response.data.data);
    }).catch((error)=>{
        console.log(error);
    })
  }
  
  useEffect(()=>{
    fetchPromotions();
  },[])


  return (
    <>
    {sliderItems.length>0 &&
    <Container>
      <Arrow direction="left" onClick={() => prevSlide()}>
        <ChevronLeftIcon />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg} key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Button onClick={()=>{navigate(`/${item.linkto}`)}}>SHOW NOW</Button>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => nextSlide()}>
        <ChevronRightIcon />
      </Arrow>
    </Container>
    }
    </>
  );
};

export default Slider;