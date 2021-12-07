// Soldier
class Soldier{
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  attack() {
    return this.strength
  }
  receiveDamage(damage){
    this.health = this.health - damage
  }
}
console.log(Soldier.prototype.health);

// Viking
class Viking extends Soldier{
  constructor(name, health, strength){
    super(health, strength);
    this.name = name;
  }

  receiveDamage(damage){
    this.health = this.health - damage
    if(this.health > 0){
      return `${this.name} has received ${damage} points of damage`
    }else {
      return `${this.name} has died in act of combat`
    }
  }

  battleCry(){
    return "Odin Owns You All!"
  }

  attack(){
    return this.strength
  }
}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(damage){
    this.health = this.health - damage
    if (this.health > 0) {
      return `A Saxon has received ${damage} points of damage`
    }else{
      return "A Saxon has died in combat"
    }
  }
}

// War
class War {
  constructor(){
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

addViking(Viking){
  this.vikingArmy.push(Viking);
}
addSaxon(Saxon){
  this.saxonArmy.push(Saxon);
}

vikingAttack(){
  let randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
  let randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
  let result = randomSaxon.receiveDamage(randomViking.strength)
  // if (randomSaxon.health <= 0) {
    
  // }
  return result

}
saxonAttack(){
  let randomSaxon = this.saxonArmy[Math.floor(Math.random()* this.saxonArmy.length)];
  let randomViking = this.vikingArmy[Math.floor(Math.random()* this.vikingArmy.length)];
  let result = randomViking.receiveDamage(randomSaxon.strength)
  return result
}
showStatus(){}

}


// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
