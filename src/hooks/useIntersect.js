import { useEffect, useRef, useState } from 'react'

const useIntersect = ({ root = null, rootMargin, threshold = 0 }) => {
  const [entry, updateEntry] = useState({})
  const [node, setNode] = useState(null)

  const observer = useRef()

  useEffect(() => {
    observer.current = new window.IntersectionObserver(([entry]) => updateEntry(entry), {
      root,
      rootMargin,
      threshold,
    })
  }, [])
  useEffect(
    () => {
      const { current: currentObserver } = observer
      currentObserver.disconnect()

      if (node) currentObserver.observe(node)

      return () => currentObserver.disconnect()
    },
    [node],
  )

  if (typeof window === 'undefined') {
    return [() => {
    }, {}]
  }

  if (!('IntersectionObserver' in window)) {
    return [() => {
    }, { isIntersecting: true }]
  }

  return [setNode, entry]
}

export default useIntersect
