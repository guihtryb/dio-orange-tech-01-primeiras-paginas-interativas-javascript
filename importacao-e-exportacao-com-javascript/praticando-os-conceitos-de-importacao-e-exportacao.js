function getMaxValue(numbersList) {
  let maxValue = 0

  numbersList.forEach((value) => {
    if (value > maxValue) {
      maxValue = value
    }
  })

  return maxValue;
}

module.exports = { getMaxValue };