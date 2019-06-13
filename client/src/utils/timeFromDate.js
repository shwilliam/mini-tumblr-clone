import timeDifference from './timeDifference'

export default function timeFromDate(date) {
  const now = new Date().getTime()
  const updated = new Date(date).getTime()
  return timeDifference(now, updated)
}
