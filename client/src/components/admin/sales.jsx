import React from 'react'
import { Box, Divider, Typography } from '@mui/material'
import { Fragment } from 'react'

export default function Sales() {
  return (
    <Fragment>
    <Typography variant='h5' sx={{margin:"auto",textAlign:"center", marginBottom:"2rem"}}>Sales</Typography>
    <Box sx={{marginLeft:"2rem",textAlign:"start", width:"fit-content"}}>
      <div style={{display:"grid",gridTemplateColumns: "1fr 1fr",columnGap:"2rem"}}>
        <div className='textFields'>
          <Typography variant='h6'>Orders : </Typography>
          <Typography variant='h6'>Revenue :</Typography>
          <Typography variant='h6'>Shipping Cost :</Typography>
          <Divider sx={{width:"200%"}}/>
          <Typography variant='h6'>Profit</Typography>
        </div>
        <div className='rightFields'>
          <Typography variant='h6'>XX</Typography>
          <Typography variant='h6'>$$$</Typography>
          <Typography variant='h6'>$$$</Typography>
          <Typography variant='h6'>$$$$</Typography>
        </div>
      </div>
    </Box>
    </Fragment>
  )
}
