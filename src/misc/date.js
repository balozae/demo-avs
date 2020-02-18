export const addMinutes = (date, minutes) => {
  return new Date(+date + (minutes * 60 * 1000))
}

export const durationHumanize = (minutes) => {
  const h = Math.ceil(minutes / 60)
  const m = minutes % 60

  return {
    hours: h,
    minutes: m
  }
}