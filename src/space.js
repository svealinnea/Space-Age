export function UserAge(age){
this.age = age;
this.mercury = age / .24;
this.venus = age / .62;
this.mars = age / 1.88;
this.jupiter = age / 11.88;
}

export function LifeExp(age) {
  this.age = age;
  this.mercuryexp = age * 1/2;
}


