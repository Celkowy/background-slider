import './Slider.css'
import Background from './Background.js'
import Content from './Content.js'
import { useState } from 'react'

const images = [
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/04/23/17/16/cascade-7152189_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
]

function Slider() {
  const [active, setActive] = useState(0)
  const changeSlide = n => {
    setActive((active + n + images.length) % images.length)
  }
  return (
    <>
      <Background active={active} url={images[active]} />
      <Content active={active} changeSlide={changeSlide} images={images} />
    </>
  )
}

export default Slider
