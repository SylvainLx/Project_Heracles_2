const MAX_LIFE = 100;
const weapon = null;
const shield = null;

class Fighter {
  constructor(name, strength, dexterity, weapon, shield) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = MAX_LIFE;
    this.weapon = weapon;
    this.shield = shield;
  }

  getDamage() {
    const newDamage = this.strength + this.weapon;
  }

  getDefense() {
    const newDefense = this.dexterity + this.shield;
  }

  // Launch a fight
  fight(defender) {
    const attackPoints = this.getRandomInt(this.strength + this.getDamage());

    const damages = Math.max(attackPoints - defender.getDefense(), 0);

    defender.life = Math.max(defender.life - damages, 0);
    //console.log(
    //  `${this.name}🗡️attack ${defender.name} 💙 ${defender.name} : ${defender.life}`
    //);
  }

  // Generate a random value between 1 and max
  getRandomInt(max) {
    return 1 + Math.floor(Math.random() * max);
  }

  // Determine if a fighter is still alive
  isAlive() {
    return this.life > 0;
  }
}

export default Fighter;
