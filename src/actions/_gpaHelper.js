/**
 * Sum elements in an array
 * 
 * @credits Victor I. Afolabi
 * @export
 * @param {any} arr 
 * @returns 
 */
export function sumArray(arr) {
  let total = 0;
  for (let a of arr) total += a;
  return total;
}

/**
 * Convert grades to weights 
 * Instead of grades represented as A - F,
 * it is being converted to 5 - 0
 * 
 * @credits Victor I. Afolabi
 * @export
 * @param {array} grades 
 * @returns {array} convertedGrades
 */
export function convertGrades(grades) {
  let convertedGrades = [];
  for (let grade of grades) convertedGrades.push(_convGrade(grade));
  return convertedGrades;
}

/* +-------------------------------------------------------------------------------------
 * | Utility functions
 * +------------------------------------------------------------------------------------- */

function _convGrade(grade) {
  if (grade === 'A') return 5;
  else if (grade === 'B') return 4;
  else if (grade === 'C') return 3;
  else if (grade === 'D') return 2;
  else if (grade === 'E') return 1;
  else return 0;
}
