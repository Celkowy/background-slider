function Content(props) {
  return (
    <div className="content">
      <img className="content-background" src={process.env.PUBLIC_URL + `/img/pic${props.slideNumber}.jpg`} />
      <img className="arrow arrow-right" src="/img/arrow-right.png" onClick={props.nextSlide}></img>
      <img className="arrow arrow-left" src="/img/arrow-left.png" onClick={props.previousSlide}></img>
    </div>
  )
}
export default Content
