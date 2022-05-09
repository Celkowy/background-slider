import './Slider.css'
import Background from './Background.js'
import Content from './Content.js'
import { useState } from 'react'

function Slider() {
  const [slideNumber, setSlideNumber] = useState(1)
  function nextSlide() {
    setSlideNumber(prev => ++prev)
    if (slideNumber === 3) {
      setSlideNumber(1)
    }
    console.log(slideNumber)
  }

  function previousSlide() {
    setSlideNumber(prev => --prev)

    if (slideNumber === 1) {
      setSlideNumber(3)
    }
  }
  return (
    <>
      <Background slideNumber={slideNumber} />
      <Content slideNumber={slideNumber} nextSlide={nextSlide} previousSlide={previousSlide} />
    </>
  )
}

export default Slider
