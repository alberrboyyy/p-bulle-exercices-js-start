// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  return `NCC-${Math.ceil(Math.random() * 10000)}`
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  return Math.floor(Math.random() * (42000 - 41000) + 41000);
  //https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
const planetClass = ["D", "H", "J", "K", "L", "M", "N", "R", "T", "Y"];
return planetClass[Math.floor(Math.random() * planetClass.length)]
}
