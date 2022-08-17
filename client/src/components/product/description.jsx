import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Description({item}) {
  return (
    <Box sx={{padding:"1rem",maxWidth:{xs:"100%",md:"100%",lg:"80%"},margin:"auto"}}>
    <Typography variant='h4'>Product Description</Typography>
    <Typography sx={{marginTop:"1rem"}}>{item.description}</Typography>
    <Typography sx={{marginTop:"1rem"}}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex quasi recusandae laborum in temporibus eligendi, dolores qui quo amet harum eum, nobis tempora vel assumenda ad, voluptates error quidem natus quam corrupti maiores nemo? Quam earum quia, hic non rem alias cupiditate possimus debitis mollitia doloribus fugit deleniti adipisci eos necessitatibus harum suscipit laudantium, repudiandae sed laboriosam obcaecati ratione nisi eveniet ullam itaque. Repudiandae eius magnam at voluptas ratione libero excepturi eveniet vel dolores illo. Commodi neque id at corrupti molestias vel ut. Eius incidunt aut, minus nisi soluta autem molestiae aperiam iusto ea perferendis? Optio modi et eos tenetur?</Typography>
    </Box>
  )
}