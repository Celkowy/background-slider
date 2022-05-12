import useSwipe from '../Lib/useSwipe'

function Content(props) {
  const bind = useSwipe({
    onRight: () => props.changeSlide(-1),
    onLeft: () => props.changeSlide(1),
  })

  return (
    <div className="images-wrapper" {...bind()}>
      {props.images.map((_, i) => (
        <div
          key={i}
          className={`images ${i === props.active ? 'active' : ''}`}
          style={{ backgroundImage: `url(${props.url})` }}
          alt="im"
        ></div>
      ))}

      <img
        className="arrow arrow-right"
        src="./img/arrow-right.png"
        onClick={() => {
          props.changeSlide(1)
        }}
        alt="arrow-right"
      ></img>
      <img
        className="arrow arrow-left"
        src="./img/arrow-left.png"
        onClick={() => {
          props.changeSlide(-1)
        }}
        alt="arrow-left"
      ></img>
    </div>
  )
}
export default Content
