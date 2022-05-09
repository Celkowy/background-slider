function Content(props) {
  return (
    <div className="content">
      <img
        className="content-background"
        src={process.env.PUBLIC_URL + `/img/pic${props.slideNumber}.jpg`}
        alt="content-background"
      />
      <img className="arrow arrow-right" src="/img/arrow-right.png" onClick={props.nextSlide} alt={arrow - right}></img>
      <img
        className="arrow arrow-left"
        src="/img/arrow-left.png"
        onClick={props.previousSlide}
        alt={arrow - left}
      ></img>
    </div>
  )
}
export default Content
