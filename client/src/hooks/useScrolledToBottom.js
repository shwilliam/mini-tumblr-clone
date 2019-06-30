import {useEffect, useCallback} from 'react'

export default (el, onBottom) => {
  const isBottom = el =>
    el && el.getBoundingClientRect().bottom <= window.innerHeight

  const trackScrolling = useCallback(() => isBottom(el.current) && onBottom(), [
    el,
    onBottom,
  ])

  useEffect(() => {
    window.addEventListener('scroll', trackScrolling)
    return () => window.removeEventListener('scroll', trackScrolling)
  }, [trackScrolling])
}
