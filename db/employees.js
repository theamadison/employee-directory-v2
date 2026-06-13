/**
 * @typedef Employee
 * @property {number} id - Unique identifier for the employee
 * @property {string} name - Name of the employee
 */

/** @type {Employee[]} */
const employees = [
  { id: 1, name: "Carolynn McGinlay" },
  { id: 2, name: "Lodovico Filon" },
  { id: 3, name: "Jefferey Wahlberg" },
  { id: 4, name: "Kayley Tures" },
  { id: 5, name: "Rickard Carver" },
  { id: 6, name: "Michael Stryde" },
  { id: 7, name: "Averell Santino" },
  { id: 8, name: "Constantina Connue" },
  { id: 9, name: "Verile Bondesen" },
  { id: 10, name: "Gwen Grollmann" },
];

/* WARNING: this must remain the default export in order for the tests to work! */
export default employees;

/**
 * Creates a new employee with the given name and appends it into the array.
 * The ID of the created employee is one greater than the ID of the last employee.
 * @param {string} name - the name of the new employee
 * @returns {Employee} - the newly created employee
 */
export function addEmployee(name) {
  const employee = { id: employees.length + 1, name };
  employees.push(employee);
  return employee;
}

/**
 * @param {number} id - ID of the employee to retrieve
 * @returns {Employee} the employee with the given ID
 * @returns {undefined} if no employee with the given ID exists
 */
export function getEmployeeById(id) {
  return employees.find((e) => e.id === id);
}

/**
 * @returns {Employee} a random employee
 */
export function getRandomEmployee() {
  const randomIndex = Math.floor(Math.random() * employees.length);
  return employees[randomIndex];
}
