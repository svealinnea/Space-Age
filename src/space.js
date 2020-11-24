export class UserAge {
  constructor(age) {
this.age = age;
this.mercury = Math.round(age / .24);
this.venus = Math.round(age / .62);
this.mars = Math.round(age / 1.88);
this.jupiter = Math.round(age / 11.88);
}
mercury() {
  let mercuryAge = this.mercury;
  return mercuryAge
}
venus() {
  let venusAge = this.venus;
  return venusAge
}
mars() {
  let marsAge = this.mars;
  return marsAge
}
mercuryExp () {
  let lifeExp = 240;
  let mercuryLife = lifeExp - this.mercury;
  return `Your life expectancy on Mercury is ${mercuryLife} more years!`
}
venusExp () {
  let lifeExp = 620;
  let venusLife = lifeExp - this.venus
  return `Your life expectancy on Venus is ${venusLife} more years!`
}
marsExp () { 
  let lifeExp = 700;
  let marsLife = lifeExp - this.mars
  return `Your life expectancy on Mars is ${marsLife} more years`
}
} 