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
    return mercuryAge;
  }
  venus() {
    let venusAge = this.venus;
    return venusAge;
  }
  mars() {
    let marsAge = this.mars;
    return marsAge;
  }
  jupiter() { 
    let jupiterAge = this.jupiter;
    return jupiterAge;
  }
  mercuryExp () {
    let lifeExp = 240;
    let mercuryLife = lifeExp - this.mercury;
    if (mercuryLife > 0) {
      return `Your life expectancy on Mercury is ${mercuryLife} more years!`;
    } else if (mercuryLife < 0) {
      let noTime = Math.abs(mercuryLife); 
      return `uh oh looks like you have overstayed your welcome by ${noTime} years!`;
    } else {
      return `uh oh looks like you will die this year.`;
    }
  }
  venusExp () {
    let lifeExp = 620;
    let venusLife = lifeExp - this.venus;
    if (venusLife > 0) {
      return `Your life expectancy on Venus is ${venusLife} more years!`;
    } else if (venusLife < 0) {
      let noTime = Math.abs(venusLife);
      return `uh oh looks like you have overstayed your welcome by ${noTime} years!`;
    } else {
      return `Uh oh looks like you are going to die this year.`;
    }
  }
  marsExp () { 
    let lifeExp = 700;
    let marsLife = lifeExp - this.mars;
    if (marsLife > 0) {
      return `Your life expectancy on Mars is ${marsLife} more years!`;
    } else if (marsLife < 0) {
      let noTime = Math.abs(marsLife);
      return `uh oh looks like you have overstayed your welcome by ${noTime} years!`;
    } else {
      return `uh oh looks like you will die this year.`;
    }
  }
  jupiterExp () {
    let lifeExp = 400;
    let jupiterLife = lifeExp - this.jupiter;
    if (jupiterLife > 0) {
      return `Your life expectancy on Jupiter is ${jupiterLife} more years!`;
    } else if (jupiterLife < 0) {
      let noTime = Math.abs(jupiterLife);
      return `uh oh looks like you have overstayed your welcome by ${noTime} years!`;
    } else {
      return `uh oh looks like you will die this year.`;
    }
  }
} 