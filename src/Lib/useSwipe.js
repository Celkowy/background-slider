import { useDrag } from 'react-use-gesture'

const anonFn = () => {}

export default function useSwipe(
  actions = {
    onLeft: anonFn,
    onRight: anonFn,
  },
  threshold = 0.3
) {
  const bind = useDrag(({ last, vxvy: [vx, vy] }) => {
    if (Math.abs(vx) > Math.abs(vy)) {
      if (vx < -threshold && last) {
        actions.onLeft()
      } else if (vx > threshold && last) {
        actions.onRight()
      }
    } else {
      if (vy < -threshold && last) {
        actions.onUp()
      } else if (vy > threshold && last) {
        actions.onDown()
      }
    }
  })

  return bind
}
