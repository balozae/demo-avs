export const formattedNumber = (number, groupSeparator = ' ') => {
  return new Intl.NumberFormat('en-US')
    .formatToParts(number)
    .map(({ type, value }) => {
      switch (type) {
        case 'group': return groupSeparator
        default: return value
      }
    })
    .join('')
}

export const formattedTime = (date) => {
  const hours = String(date.getHours())
  const minutes = String(date.getMinutes())
  
  return `${hours.padStart(2, 0)}:${minutes.padStart(2, 0)}`
}
