INSERT INTO department (name)
VALUES ('Engineering'), ('Finance'), ('Legal'), ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ('Account Manager', 160000, 2),
        ('Lawyer', 190000, 3),
        ('Sales Lead', 100000, 4),
        ('Software Engineering', 120000, 1);

INSERT INTO employee (first_name, last_name, role_id, department_id)
VALUES ('Kunal', 'Singh', 5, NULL),
        ('Tom', 'Allen', 8, NULL),
        ('John', 'Doe', 1, NULL),
        ('Kevin', 'Tupik', 4, NULL);