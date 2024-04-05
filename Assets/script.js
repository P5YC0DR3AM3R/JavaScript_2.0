// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {
  // TODO: Get user input to create and return an array of employee objects
  let allEmployees = [];
  let information = true;
  while (information) {
    // Prompt user for employee first name - store response in variable
    const firstName = prompt("Enter your first name: ");
    // Prompt user for employee last name - store response in variable
    const lastName = prompt("Enter your last name: ");
    // Prompt user for employee last name - store response in variable
    let salary = prompt("Enter your current salary: ")
    if (Number.isNaN(salary) || salary === null) {
      salary = 0;
    }
    // create the employee object
    let employee = {
      firstName: firstName,
      lastName: lastName,
      salary: parseFloat(salary)
    }
    // push employee object to employee array
    allEmployees.push(employee);
      // ask if they want to add a new employee
    information = window.confirm("Add next Employee? ");
    // if yes repeat
  }
  return allEmployees;
    // if no return employee array
}

  // TODO: Calculate and display the average salary
  const displayAveragesalary = function(employeesArray) {
    totalsalary = 0;
  for (i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];
    totalsalary += parseInt(currentEmployee.salary);
    }
    let averagesalary = totalsalary / employeesArray.length;
    alert((`There are ${employeesArray.length} employees. The average salary is $ ${averagesalary.toFixed(2)} `))
    console.log(`The average salary is $ ${averagesalary.toFixed(2)} `);
    console.log(`There are ${employeesArray.length} employees`);
    // Display the average salary
    return averagesalary;
  }

// Select a random employee
  const getRandomEmployee = function(employeesArray) {
    let randomEmployee = Math.floor(Math.random() * employeesArray.length);
    console.log(`The randomly selected employee is: ${employeesArray[randomEmployee].firstName} ${employeesArray[randomEmployee].lastName}`);
  }
  

  // Expected output: 0, 1 or 2
  // TODO: Select and display a random employee
/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

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
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAveragesalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
