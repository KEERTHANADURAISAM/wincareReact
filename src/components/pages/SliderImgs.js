import React from 'react'
import {Paper} from '@mui/material'

const SliderImgs = ({item}) => {
  return (
    <div>
    <Paper style={{border:'none',height:"410px",width:'800px',marginLeft:'270px',borderRadius:"30px",marginTop:'5px'}}>
        <img src={item.src} className='slider-img' style={{height:"410px",width:"800px",borderRadius:"25px",}} alt={item.alt}></img>
        </Paper>
    </div>
  )
}

export default SliderImgs