function Background(props) {
  return <img className="background" src={process.env.PUBLIC_URL + `/img/pic${props.slideNumber}.jpg`} />
}
export default Background
