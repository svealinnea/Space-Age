import { prototype } from "html-webpack-plugin";

export class UserAge {
  constructor(age) {
this.age = age;
this.mercury = age / .24;
this.venus = age / .62;
this.mars = age / 1.88;
this.jupiter = age / 11.88;
  }
}

export class LifeExp {
  constructor(age) {
  this.age = age;
  this.mercuryexp = age * 1/2;
  this.venusexp = age * 3/4;
  this.marsexp = age * 2;
  this.jupiterexp = age * 5;
  }
}
UserAge.prototype.deadExpectancy = function () {
  if (this.age === 0) {
    return "You are not alive!"
  } else if (this.age >= 100) {
    return "You have become dust"
  }
}

