import { useEffect, useState } from 'react'

import useIntersect from './useIntersect'

const useLazyLoad = (margin = '200px') => {
  const [ref, entry] = useIntersect({ rootMargin: margin })
  const [loaded, setLoad] = useState(entry.isIntersecting || false)

  useEffect(
    () => {
      if (loaded) return
      if (entry.isIntersecting) setLoad(true)
    },
    [entry.isIntersecting, loaded],
  )

  return [ref, loaded]
}

export default useLazyLoad
