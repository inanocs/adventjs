function manufacture(gifts: Array<string>, materials: string) {
  return gifts.filter((gift) => {
    let isFabricable = true
    for (const char of gift) {
      if (!materials.includes(char)) {
        isFabricable = false
        break
      }
    }
    return isFabricable
  })
}

export default manufacture
