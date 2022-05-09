function Content(props) {
  return (
    <div className="images-wrapper">
      {props.images.map((url, i) => (
        <img key={i} className={`images ${i === props.active ? 'active' : ''}`} src={url} alt="image" />
      ))}
      <img
        className="content-background"
        src={process.env.PUBLIC_URL + `/img/pic${props.slideNumber}.jpg`}
        alt="content-background"
      />
      <img className="arrow arrow-right" src="/img/arrow-right.png" onClick={props.nextSlide} alt="arrow-right"></img>
      <img className="arrow arrow-left" src="/img/arrow-left.png" onClick={props.previousSlide} alt="arrow-left"></img>
    </div>
  )
}
export default Content
