import express from "express";
import { getEmployee, getEmployees, getRandomEmployee } from "#db/employees";

const app = express();
export default app;

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  const employees = getEmployees();
  res.send(employees);
});

// Before any other middleware is written in code, this one has to come first.
// Without following this order, Express will treat "random" as the arguement to the `id` parameter of /employees/:id.
app.get("/employees/random", (req, res) => {
  const employee = getRandomEmployee();
  res.send(employee);
});

app.get("/employees/:id", (req, res) => {
  const { id } = req.params;

  // To find the employee, we need to convert `id` into a number.
  // Req.params are always strings unless converted.
  const employee = getEmployee(+id);

  if (!employee) {
    return res.status(404).send(`Employee #${id} not found.`);
  }

  res.send(employee);
});
