import React from 'react'
import Carousel from 'react-material-ui-carousel'
import image1 from '../media/img/Blue and Yellow Modern Hiring Team Banner/1.png'
import image2 from '../media/img/Blue and Yellow Modern Hiring Team Banner/2.png'
import image3 from '../media/img/Blue and Yellow Modern Hiring Team Banner/3.png'
// import Navbar from './Navbar'
import SliderImgs from './SliderImgs'


const Slider = (props) => {
  const imagesList = [
    {
      id: 1,
      src: image1,
      alt: "Image 1",
    },
    {
      id: 2,
      src: image2,
      alt: "Image 2",
    },
    {
      id: 3,
      src: image3,
      alt: "Image 3",
    },
  ];
  console.log(imagesList)
  return (
    <Carousel>
    {
        imagesList.map( (item, id) => {return <SliderImgs key={id} item={item} /> })
    }
</Carousel>
  )
}

export default Slider