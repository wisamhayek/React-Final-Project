import React, { Fragment,useState } from 'react'
import { Button, Checkbox, Divider, MenuItem, TextField, Typography } from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import AddIcon from '@mui/icons-material/Add';
import Tooltip from '@mui/material/Tooltip';
import axios from 'axios';

export function AddPromotion() {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const [promotion,setPromotion] =useState({
    title: "",
    desc: "",
    img: "",
    bg: "",
    linkto: "",
    id: "",
  })

  const handlePromotionChange=(e)=>{
    setPromotion(prev=>({...prev,[e.target.name]:e.target.value}))
  }

   function savePromotion(){
    axios.post("http://localhost:2000/api/v1/promotions/",{promotion})
      .then((resp)=>{
        // console.log(resp);
      }).catch((error)=>{
        console.log(error);
      })
  }
  const invalid = promotion.title === "" || promotion.desc === "" || promotion.img === "" || promotion.bg === "" || promotion.linkto === "" || promotion.id === ""

  return (
    <Fragment>
      <Tooltip title="Create Promotion">
       <IconButton color='primary' size="small" onClick={handleClickOpen}>
          Create Promotion
        <AddIcon />
        </IconButton>
      </Tooltip>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Promotion</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <TextField size="small" name="title" id="promotion-title" label="Promotion Title" variant="outlined" sx={{marginTop:"4px"}} onChange={handlePromotionChange}/>
          <TextField id="promotion-description" name="desc" label="Description" multiline rows={4} variant="outlined" onChange={handlePromotionChange}/>
          <TextField size="small" name="img" id="image-links" label="Image Link" variant="outlined" onChange={handlePromotionChange}/>
          <TextField size="small" name="bg" id="bgcolor" label="Background Color" variant="outlined" onChange={handlePromotionChange}/>
          <TextField size="small" name="linkto" id="linkto" label="Link To" variant="outlined" onChange={handlePromotionChange}/>
          <TextField size="small" name="id" id="Promotion-id" label="Promotion ID" variant="outlined" onChange={handlePromotionChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={invalid} onClick={()=>{savePromotion();handleClose();}} variant="contained">Add Promotion</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}


export function AddProduct() {

  const [open, setOpen] = useState(false);

  const [rows, setRows] = useState(Number(1));
  const [rowsImage, setRowsImg] = useState(Number(1));
  const [variantName,setVariantName] =useState('');
  const [variants,setVariants] =useState('');
  const [imageLinks,setImageLinks] =useState({
    imageurl1: "",
    imageurl2: "",
    imageurl3: "",
    imageurl4: "",
    imageurl5: "",
  });
  const [product,setProduct] =useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    category: "",
    isVariant: false,
    itemid: "",
  })

  const handleProductChange=(e)=>{
    setProduct(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleProductImages=(e)=>{
    setImageLinks(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleProductVariants=(e)=>{
    // console.log(e.target.id);
    let options = e.target.id
    setVariants(prev=>( {
        ...prev, [options] : {
          ...prev[options] , [e.target.name] : e.target.value 
        }
    } )
    )
    console.log(variants);
  }

  // console.log(product)
  // console.log(imageLinks)
  // console.log(variants)

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  // Max of 5 Links for Images
  function addRows() {
    let content = [];
    if(rowsImage <=5){
      for (let i = 1; i <= rowsImage; i++) {
        content.push(<TextField key={i} size="small" name={"imageurl"+i} id="image-links" label={"Image Link "+i} variant="outlined" onChange={handleProductImages}/>);
      }
      return content;
    }else {
      for (let i = 1; i <= 5; i++) {
        content.push(<TextField key={i} size="small" name="imageurl" id="image-links" label={"Image Link "+i} variant="outlined" onChange={handleProductImages}/>);
      }
      return content
    }
  };


  // Maximum of 10 variant options/rows
  function addVariant() {
    let content = [];
    if(rows <=10){
      for (let i = 1; i <= rows; i++) {
        content.push(
          <Fragment key={i}>
          <Typography variant='h6'>Variant options {i}</Typography>
          <TextField size="small" name={"variantTitle"} id={""+i} label="Small / Blue / 128GB..." variant="outlined"  onChange={handleProductVariants}/>
          {/* <TextField type="number" name={"variantPrice"} size="small" id={""+i} label="Price" variant="outlined"  onChange={handleProductVariants}/> */}
          <TextField type="number" name={"variantQuantity"} size="small" id={""+i} label="Quantity" variant="outlined"  onChange={handleProductVariants}/>
          <Divider  sx={{marginBottom:"1rem"}}/>
          </Fragment>
        );
      }
      return content;
    }else {
      for (let i = 1; i <= 10; i++) {
        content.push(
          <Fragment key={i}>
          <Typography variant='h6'>Variant options {i}</Typography>
          <TextField size="small" name={"variantTitle"+i} id={""+i} label="Small / Blue / 128GB..." variant="outlined"  onChange={handleProductVariants}/>
          {/* <TextField type="number" name={"variantPrice"+i} size="small" id={""+i} label="Price" variant="outlined"  onChange={handleProductVariants}/> */}
          <TextField type="number" name={"variantQuantity"+i} size="small" id={""+i} label="Quantity" variant="outlined"  onChange={handleProductVariants}/>
          <Divider  sx={{marginBottom:"1rem"}}/>
          </Fragment>
        );
      }
      return content
    }
  };

  const [checked, setChecked] = useState(false);
  const handleCheckChange = (event) => {
    setChecked(event.target.checked);
    setProduct(prev=>({...prev,[event.target.name]:event.target.checked}))
  };

  function clearField(){
    setChecked(false);
    setRowsImg(1);
    setRows(1);
    setProduct("");
    setVariantName("")
    setVariants("")
  }

  const categories = [
    {
      value: 'Computers',
      label: 'Computers',
    },
    {
      value: 'Electronics',
      label: 'Electronics',
    },
    {
      value: 'Home & Kitchen',
      label: 'Home & Kitchen',
    },
    {
      value: 'Smartphones',
      label: 'Smartphones',
    },
  ];
  const [category, setCategory] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  function saveProduct(){
    axios.post("http://localhost:2000/api/v1/products/",{product,imageLinks,variantName,variants,checked})
      .then((resp)=>{
        console.log(resp);
        // clearField();
        // refreshProfile();
      }).catch((error)=>{
        console.log(error);
      })
  }

  return (
    <Fragment>
      <Tooltip title="Create Product">
       <IconButton color='primary' size="small" onClick={handleClickOpen}>
          Create Product
          <AddIcon />
        </IconButton>
      </Tooltip>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Create Product</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <Typography variant='h6'>Does the product have variants?</Typography>
          <Typography>Yes
          <Checkbox
            name="isVariant"
            checked={checked}
            onChange={handleCheckChange}
            inputProps={{ 'aria-label': 'controlled' }}
            sx={{padding:"0px",width:"fit-content",margin:"auto"}}
          />
          </Typography>
          <TextField size="small" name="name" id="product-name" label="Product Name" variant="outlined" sx={{marginTop:"4px"}} onChange={handleProductChange}/>
          <TextField id="product-description" name="description" label="Description" multiline rows={4} variant="outlined" onChange={handleProductChange}/>
          <TextField type="number" name="price" size="small" id="price" label="Price" variant="outlined" onChange={handleProductChange}/>
          {!checked &&
          <>
            <TextField type="number" name="quantity" size="small" id="quantity" label="Quantity" variant="outlined" onChange={handleProductChange}/>
          </>
          }
          <TextField
          id="category"
          select
          size="small"
          name="category"
          label="Select Category"
          value={category}
          onChange={(e)=>{
            handleCategoryChange(e);
            handleProductChange(e)
          }}
          helperText="select product category"
        >
          {categories.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

          {checked &&
          <>
          <Divider />
          <Typography variant='h5'>Variant Name :</Typography>
          <TextField size="small" id="variant-name" label="Size / Color / Storage..." variant="outlined" value={variantName} onChange={(e)=>{setVariantName(e.target.value)}}/>
          {addVariant()}
          <Button onClick={()=>{setRows(rows+1)}}>Add more options</Button>
          </>
          }

          {addRows()}
          <Button onClick={()=>{setRowsImg(rowsImage+1)}}>Add more Images</Button>
          <TextField size="small" name="itemid" id="product-id" label="Product ID" variant="outlined" onChange={handleProductChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>{handleClose();clearField();setVariants("")}}>Cancel</Button>
          <Button  onClick={()=>{saveProduct();handleClose();}} variant="contained">Add Product</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}


export function EditProduct({item}) {

  const [open, setOpen] = useState(false);
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);


  const handleUpdate = () => {
    console.log(item._id);
    axios.put(`http://localhost:2000/api/v1/product/${item._id}`,{price,quantity})
    .then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  const invalid = price === "" && quantity === "";

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Product</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <Typography >Price : {item.price}</Typography>
          <TextField size="small" id="price" label="New Price" variant="outlined" onChange={(e)=>{setPrice(e.target.value)}}/>
          <Typography>Quantity : {item.quantity}</Typography>
          <TextField size="small" id="quantity" label="New Quantity" variant="outlined" onChange={(e)=>{setQuantity(e.target.value)}}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={invalid} onClick={()=>{handleUpdate();handleClose()}} variant="contained">Update</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}


export function DeleteProduct({id}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    console.log(id);
    axios.delete(`http://localhost:2000/api/v1/product/${id}`)
    .then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Delete</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Product</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <Typography>Are you sure you want to delete this product? This action can't be reverted.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{handleDelete();handleClose()}} variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}


export function DeletePromotion({id}) {

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleDelete = () => {
    console.log(id);
    axios.delete(`http://localhost:2000/api/v1/promotions/`,{headers: {
      promotionid: id
    }})
    .then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Delete</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Promotion</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <Typography>Are you sure you want to delete this promotion? This action can't be reverted.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={()=>{handleDelete();handleClose()}} variant="contained">Delete</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}



export function EditPromotion({item}) {

  const [open, setOpen] = useState(false);
  const [promoid, setPromoID] = useState(item._id);
  const [promotion,setPromotion] =useState({
    title: item.title,
    desc: item.desc,
    img: item.img,
    bg: item.bg,
    linkto: item.linkto,
    id: item.id,
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handlePromotionChange=(e)=>{
    setPromotion(prev=>({...prev,[e.target.name]:e.target.value}))
  }


  const handleUpdate = () => {
    // console.log(item._id);
    axios.put(`http://localhost:2000/api/v1/promotions/`,{promotion,promoid})
    .then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  }
  const invalid = promotion.title === "" || promotion.desc === "" || promotion.img === "" || promotion.bg === "" || promotion.linkto === "" || promotion.id === ""

  return (
    <Fragment>
      <Button onClick={handleClickOpen}>Edit</Button>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Update Promotion</DialogTitle>
        <DialogContent sx={{display:"flex",flexDirection:"column",rowGap:"8px",padding:"16px"}}>
          <Typography >Title :</Typography>
          <TextField defaultValue={item.title} size="small" name="title" id="promotion-title" label="Promotion Title" variant="outlined" sx={{marginTop:"4px"}} onChange={handlePromotionChange}/>
          <Typography>Description :</Typography>
          <TextField defaultValue={item.desc} id="promotion-description" name="desc" label="Description" multiline rows={4} variant="outlined" onChange={handlePromotionChange}/>
          <Typography>Image URL :</Typography>
          <TextField defaultValue={item.img} size="small" name="img" id="image-links" label="Image Link" variant="outlined" onChange={handlePromotionChange}/>
          <Typography>Background Color :</Typography>
          <TextField defaultValue={item.bg} size="small" name="bg" id="bgcolor" label="Background Color" variant="outlined" onChange={handlePromotionChange}/>
          <Typography>Link To :</Typography>
          <TextField defaultValue={item.linkto} size="small" name="linkto" id="linkto" label="Link To" variant="outlined" onChange={handlePromotionChange}/>
          <Typography>ID :</Typography>
          <TextField defaultValue={item.id} size="small" name="id" id="Promotion-id" label="Promotion ID" variant="outlined" onChange={handlePromotionChange}/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button disabled={invalid} onClick={()=>{handleUpdate();handleClose()}} variant="contained">Update</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  )
}