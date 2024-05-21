const floatInputHandler = (value, setValue) => {
  if ((value.match(/\./g) || []).length > 1) return
  if ((value.match(/\./g) || []).length === 1) {
    if (value.split(".")[1].length > 1) return
  }
  const filteredInput = value.replace(/[^0-9.]/g, "")
  setValue(filteredInput)
}

export default floatInputHandler
