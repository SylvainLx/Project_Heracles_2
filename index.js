import Fighter from "./src/Fighter.js";
import Shield from "./src/Shield.js";
import Weapon from "./src/Weapon.js";

let epee = new Weapon("Epée");
let bouclier = new Shield("Bouclier");

/** Create Heracles  */
const heracles = new Fighter(
  "🧔 Heracles",
  20,
  6,
  epee.damage,
  bouclier.protection
);

/** Create the opponent  */
const boar = new Fighter("🐗 Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} 🗡️  ${fighter2.name} 💙 ${fighter2.name} : ${fighter2.life}`;
};
heracles.fight(boar);
console.log(roundDisplay(heracles, boar));
//boar.fight(heracles);
/**
 * Helper to dispatch fighters between winner and loser
 */
const score = (fighter1, fighter2) => {
  return fighter1.isAlive()
    ? {
        winner: fighter1,
        loser: fighter2,
      }
    : {
        winner: fighter2,
        loser: fighter1,
      };
};
