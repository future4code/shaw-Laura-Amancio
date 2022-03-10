function calculaNota(ex, p1, p2) {
  let média = (ex + (p1 * 2) + (p2 * 3)) / 6
  if(media >= 9){
    return "A"
  }else if(media < 9 && media >= 7.5){
    return "B"
  }else if(media < 7.5 && media >= 6){
    return "C"
  }else if(media < 6){
    return "D"
  }
}