import { convertGrades, sumArray } from './_gpaHelper';

/**
 * Calculates the Grade Point Average (GPA)
 * 
 * @credits Victor I. Afolabi
 * @export
 * @param {array} grades 
 * @param {array} units 
 * @returns {float} gpa
 */
export function calculateGPA(grades, units) {
  // convert grades to 5 through 0 instead of A - F
  grades = convertGrades(grades);
  // sum all units
  const totalCourseUnit = sumArray(units);
  let totalWeight = 0;
  for (let i in grades) totalWeight += grades[i] * units[i];
  return totalWeight / totalCourseUnit;
}
