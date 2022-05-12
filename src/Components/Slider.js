import Background from './Background'
import Content from './Content'
import { useState } from 'react'
import useKeypress from 'react-use-keypress'
import './Slider.css'
const images = [
  'https://images.unsplash.com/photo-1652177412898-00c6204a1e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
  'https://images.unsplash.com/photo-1652043058252-7cfb295965c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
  'https://images.unsplash.com/photo-1652053533741-65527c3625a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
  'https://images.unsplash.com/photo-1652082200637-d04649c2a366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  'https://images.unsplash.com/photo-1649775391951-e3fdf0e7e7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80',
]

function Slider() {
  const [active, setActive] = useState(0)
  const changeSlide = change => {
    setActive((active + change + images.length) % images.length)
  }

  useKeypress(['ArrowLeft', 'ArrowRight', 'd', 'a'], event => {
    if (event.key === 'ArrowLeft' || event.key === 'a') {
      changeSlide(-1)
    } else if (event.key === 'ArrowRight' || event.key === 'd') {
      changeSlide(1)
    }
  })

  return (
    <>
      <Background url={images[active]} />
      <Content active={active} changeSlide={changeSlide} url={images[active]} images={images} />
    </>
  )
}

export default Slider
