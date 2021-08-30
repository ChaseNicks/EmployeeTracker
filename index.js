const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");

const db_connection = mysql.createConnection(

    {
        host: "localhost",
        port: "3306",
        user: "root",
        password: "Reddog99",
        database: "company_db",
    },
    console.log("Connected to company_db")
);

db_connection.connect(function (err) {
    if (err) throw err;
    start();
});

const start = () => {
    inquirer
        .prompt([
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

        .then(function(val) {
            switch (val.choice) {

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

        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        });
};

const viewAllRoles = () => {

    const query = "SELECT role.id, role.title, role.salary FROM role;";
    db_connection.query(query,

        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        });

}

const viewAllEmployees = () => {

    const query = "SELECT employee.id, employee.first_name, employee.last_name, department.name, role.title, role.salary, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;";
    db_connection.query(query,

        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        });

};

const addAdeparment = () => {

    inquirer.prompt([
       {
           name:"Name",
           type:"input",
           message:"What department are you looking to add?",
       } 
    ]).then(function(res){
        const query = "INSERT INTO deparment SET ?";
        db_connection.query(query,
            {
                name: res.Name
            },
            function (err) {
                if (err) throw err
                console.table(res);
                start();
            })
    })
};

const addArole = () => {

    const query = "INSERT INTO role (id, title, salary, department_id) VALUES ()";
    db_connection.query(query,

        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        });

}

const addAemployee = () => {

    const query = "INSERT INTO employee (id, first_name, last_name, role_id, manager_id) VALUES ()";
    db_connection.query(query,

        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        });

}

const updateEmployeeRole = () => {

    const query = "UPDATE employee SET column1 = value1, column2 = value2 WHERE ";
    db_connection.query(query,

        function (err, res) {
            if (err) throw err
            console.table(res);
            start();
        });

}