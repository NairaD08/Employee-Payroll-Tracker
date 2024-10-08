// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector("#add-employees-btn");

// Collect employee data
const collectEmployees = function () {
  const employees = [];
  let keepMoving = true;

  while (keepMoving) {
    const firstName = prompt("type employess's first name.");
    const lastName = prompt("Type employee's last name.");
    let salary = prompt("Type employee's salary (no commas).");

    if (isNaN(salary)) {
      salary = 0;
    } else {
      salary = parseFloat(salary);
    }
    const currentEmployee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary,
    };
    employees.push(currentEmployee);

    const continueNextEmployee = confirm(
      "Click okay to add next employee info"
    );
    keepMoving = continueNextEmployee;
  }
  console.log(employees);
  return employees;
};

// TODO: Get user input to create and return an array of employee objects

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  let totalSalary = 0;
  employeesArray.forEach((employee) => {
    totalSalary += employee.salary;
  });
  const averageSalary = totalSalary / employeesArray.length;
  const result = `Average Salary: $${averageSalary.toFixed(
    2
  )} | Number of Employees: ${employeesArray.length}`;
  console.log(result);
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  const randomInput = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[randomInput];
  const fullName = `${randomEmployee.firstName} ${randomEmployee.lastName}`;

  console.log(
    "Congratulations to " + `${fullName}` + " our random drawing winner!"
  );
  // TODO: Select and display a random employee
};

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector("#employee-table");

  // Clear the employee table
  employeeTable.innerHTML = "";

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
};

const trackEmployeeData = function () {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log("==============================");

  getRandomEmployee(employees);

  employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener("click", trackEmployeeData);
