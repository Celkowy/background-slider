import Background from './Background'
import Content from './Content'
import { useState } from 'react'
import useKeypress from 'react-use-keypress'
import './Slider.css'
let images

const mediaQuery = window.matchMedia('(max-width: 640px)')

if (mediaQuery.matches) {
  images = [
    'https://images.unsplash.com/photo-1652252029347-7030a5ed232a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1652326320285-0fd8bb355255?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    'https://images.unsplash.com/photo-1652306211830-63e82dc08835?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1652293190290-867df80a72a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    'https://images.unsplash.com/photo-1652283428967-95a1dc4756b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1652267990738-e78a61d72832?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
  ]
} else {
  images = [
    'https://images.unsplash.com/photo-1652177412898-00c6204a1e58?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80',
    'https://images.unsplash.com/photo-1652043058252-7cfb295965c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2062&q=80',
    'https://images.unsplash.com/photo-1652053533741-65527c3625a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1651869924653-0a0f5d21067a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2064&q=80',
    'https://images.unsplash.com/photo-1652082200637-d04649c2a366?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    'https://images.unsplash.com/photo-1649775391951-e3fdf0e7e7ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1162&q=80',
  ]
}

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
