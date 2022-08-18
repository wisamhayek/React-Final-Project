// Data will be fetched from the server and replaced

// meta data will have the:
// last product id to add new product +
// sliderItems for promotions -> should have details for buttom navigation to category/product+
// featured / new arrived products +
// related products for each product +
// categories
// cart items

//Images should have aspect ratio 1/1 to fit correctly

export const sliderItems = [
    {
        id: 1,
        img: "https://res.cloudinary.com/dxokfbx1k/image/upload/w_1000,ar_1:1/v1654019876/samples/ecommerce/leather-bag-gray.jpg",
        title: "SUMMER SALE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "f5fafd",
        linkTo: "browse"
    },
    {
        id: 2,
        img: "https://i.ibb.co/DG69bQ4/2.png",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fcf1ed",
    },
    {
        id: 3,
        img: "https://i.ibb.co/cXFnLLV/3.png",
        title: "LOUNGEWEAR LOVE",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "fbf0f4",
    },
    {
        id: 4,
        img: "https://res.cloudinary.com/dxokfbx1k/image/upload/w_1000,ar_1:1/v1654019868/samples/ecommerce/analog-classic.jpg",
        title: "AUTUMN COLLECTION",
        desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.",
        bg: "#ff6600",
      },
];


  export const categories = [
    {
      id: 1,
      img: "https://res.cloudinary.com/dxokfbx1k/image/upload/v1660171841/Final%20Project/macbook_pd3d92.jpg",
      title: "Computers",
    },
    {
      id: 2,
      img: "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Smartphones",
    },
    {
      id: 3,
      img: "https://res.cloudinary.com/dxokfbx1k/image/upload/w_1000,ar_1:1/v1660165757/cld-sample-5.jpg",
      title: "TV",
    },
    {
      id: 4,
      img: "https://images.pexels.com/photos/5480696/pexels-photo-5480696.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      title: "Home & Kitchen",
    }
  ];


  export const newProducts = [
    {
      id:1,
      img: "https://res.cloudinary.com/dxokfbx1k/image/upload/v1660171841/Final%20Project/macbook_pd3d92.jpg",
      price: 2000,
      title: "Macbook Pro 14 256GB Silver"
    },
    {
      id:2,
      img:"https://res.cloudinary.com/dxokfbx1k/image/upload/v1660171841/Final%20Project/macbook_pd3d92.jpg",
      price: 3000,
      title: "Macbook Pro 16"
    },
    {
      id:3,
      img: "https://res.cloudinary.com/dxokfbx1k/image/upload/v1660171840/Final%20Project/iphone_13_wcq0zj.jpg",
      price: 999,
      title: "iPhone 13"
    },
    {
      id:4,
      img: "https://res.cloudinary.com/dxokfbx1k/image/upload/v1660171842/Final%20Project/Nikon_D60_wuj2ug.jpg",
      price: 1299,
      title: "Nikon D60"
    }
  ]