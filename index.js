import Fighter from "./src/Fighter.js";
import Shield from "./src/Shield.js";
import Weapon from "./src/Weapon.js";

let epee = new Weapon("EpÃ©e");
let bouclier = new Shield("Bouclier");

/** Create Heracles  */
const heracles = new Fighter(
  "ð§ Heracles",
  20,
  6,
  epee.damage,
  bouclier.protection
);

/** Create the opponent  */
const boar = new Fighter("ð Erymanthian Boar", 25, 12);

/**
 * Helper to produce the result of a round
 */
const roundDisplay = (fighter1, fighter2) => {
  return `${fighter1.name} ð¡ï¸  ${fighter2.name} ð ${fighter2.name} : ${fighter2.life}`;
};
//heracles.fight(boar);
//console.log(roundDisplay(heracles, boar));
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

{
  let round = 0;

  while (heracles.isAlive() && boar.isAlive()) {
    console.log(`ð Round #${round}`);

    heracles.fight(boar);
    console.log(roundDisplay(heracles, boar));

    boar.fight(heracles);
    console.log(roundDisplay(boar, heracles));

    round++;
  }

  const result = score(heracles, boar);

  console.log(`ð ${result.loser.name} is dead`);
  console.log(`ð ${result.winner.name} wins (ð ${result.winner.life} )`);
}
