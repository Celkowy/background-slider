import './Slider.css'
import Background from './Background.js'
import Content from './Content.js'
import { useState } from 'react'

const images = [
  'https://images.unsplash.com/photo-1652041436330-a8c7ef3d1cb7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  'https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/04/15/07/58/sunset-7133867_960_720.jpg',
  'https://cdn.pixabay.com/photo/2022/04/23/17/16/cascade-7152189_960_720.jpg',
  'https://cdn.pixabay.com/photo/2021/08/25/20/42/field-6574455_960_720.jpg',
  'https://images.unsplash.com/photo-1652039033526-c08f804dc888?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
]

function Slider() {
  const [active, setActive] = useState(0)
  const changeSlide = change => {
    setActive((active + change + images.length) % images.length)
    // if(active )
    // if (isNext) setActive(prev => ++prev)
    // else setActive(prev => --prev)
  }
  return (
    <>
      <Background active={active} url={images[active]} images={images} />
      <Content active={active} changeSlide={changeSlide} url={images[active]} images={images} />
    </>
  )
}

export default Slider
