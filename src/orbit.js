import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { tween, easing } from 'popmotion'
import { camelCase } from 'lodash'

function getStyles(node, properties) {
  let computed = window.getComputedStyle(node)
  let styles = {}
  properties.forEach((property) => {
    styles[camelCase(property)] = computed.getPropertyValue(property)
  })
  return styles
}

let nodes = {}

export function orbit(name, properties) {
  let [ styleState, setStyleState ] = useState({})
  let ref = useRef(null)

  useLayoutEffect(() => {
    let old = nodes[name]
    delete nodes[name]

    let newNode = ref.current

    if(old && newNode) { // we've got a new node and old styles! So it's time to animate!
      let newStyles = getStyles(newNode, properties)
      let newPosition = newNode.getBoundingClientRect()

      console.log(newPosition)

      let translateX = old.position.left - newPosition.left
      let translateY = old.position.top - newPosition.top

      let oldStyles = {
        ...old.styles,
        transform: `translate(${translateX}px, ${translateY}px)`
      }

      console.log(`translate(${translateX}px, ${translateY}px)`)

      setStyleState(oldStyles)

      tween({
        from: oldStyles,
        to: {
          ...newStyles,
          transform: `translate(0px, 0px)`
        },
        ease: easing.easeInOut,
        duration: 3000
      }).start((v) => setStyleState({ ...v }))
    }
    return () => {
      nodes[name] = {
        styles: getStyles(ref.current, properties),
        position: ref.current.getBoundingClientRect()
      }
    }
  }, [])

  return {
    ref,
    style: styleState
  }
}
