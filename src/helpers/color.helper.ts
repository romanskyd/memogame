export function getColor(colors: string[]) {
  let colorIndex = 0
  let colorPairIndex = 1
  return () => {
    let color = ''

    if (colorPairIndex === 3) {
      colorPairIndex = 1
      colorIndex++
      colorPairIndex = 1
      if (colorIndex >= colors.length) {
        colorIndex = 0
      }
    }

    color = colors[colorIndex]

    colorPairIndex++

    return color
  }
}
