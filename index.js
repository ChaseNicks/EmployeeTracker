const mysql  = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db_connection  = mysql.createConnection( 

    {
        host:"localhost",
        port:"3306",
        user:"root",
        password:"Reddog99",
        database:"company_db",
    },
    console.log("Connected to company_db")
);

db_connection.connect(function (err) {
    if (err) throw err;
    start();
});

const start = () => {
  inquirer
  .prompt ([
      {
          type: "list",
          message: "What would you like to do?",
          name: "choice",
          choices: [
              "View all departments",
              "View all roles",
              "View all employees",
              "Add a department",
              "Add a role",
              "Add a employee",
              "Update an employee role"
          ],
      },
  ])

  .then((val) => {
      switch (val.choices) {

        case "View all departments":
            viewAllDepartments();
            break;

        case "View all roles?":
            viewAllRoles();
            break;

        case "View all employees?":
            viewAllEmployees();
            break;

        case "Add a department?":
            addAdeparment();
            break;

        case "Add a role":
            addArole();
            break;
        
        case "Add a emoployee":
            addAemployee();
            break;

        case "Update an employee role?":
            updateEmployeeRole();
            break;
      }
  });
};

const viewAllDepartments = () => {

    const query = "SELECT * FROM department;";
    db_connection.query(query,

        function(err, res) {
            if (err) throw err
            console.table(res);
            start();
        });
};

const viewAllRoles = () => {
  
}

const viewAllEmployees = () => {
  
}

const addAdeparment = () => {
  
}

const addArole = () => {
  
}

const addAemployee = () => {
  
}

const updateEmployeeRole = () => {
  
}