/*
const firstNames = ['Alex', 'Tom', 'Gosia', 'Artur', 'Daniel', 'Marek', 'Carl', 'Simon', 'Joanna', 'Arek', 'Thomas', 'Lee'];
const surnames = ['Fisher', 'Samsung', 'Siemens', 'Snickers', 'Lenovo', 'Philips', 'Gucci', 'Levis'];

function generateNames(fNames, sNames, numOfUsers = 5) {
    let nameList = [];
    numOfUsers > fNames.length * sNames.length ? numOfUsers = fNames.length * sNames.length : numOfUsers = numOfUsers;
    while (nameList.length < numOfUsers) {
        let fRandIndex = Math.floor(Math.random() * fNames.length - 1) + 1;
        let fRandName = fNames[fRandIndex];
        let sRandIndex = Math.floor(Math.random() * sNames.length - 1) + 1;
        let sRandName = sNames[sRandIndex];
        let newName = `${fRandName} ${sRandName}`;
        if (!nameList.includes(newName)) {
            nameList.push(newName);
        }
    }
    return nameList;
}

function getEmployees(names) {
    let employees = [];
    names.forEach((employee, index) => employees.push(
        {
            name: employee,
            pin: employee[0].toLowerCase(),
            employeeId: `ID-${index + 1}`,
            isActive: true,
            isAtWork: false,
            activity: 'absence',
        }
    ));
    return employees;
}

let employees = getEmployees(generateNames(firstNames, surnames, 10));

console.log(employees);
*/

const employees = [
    {
        "name": "Gosia Levis",
        "pin": "g",
        "employeeId": "ID-1",
        "isActive": true,
        "isAtWork": false,
        "activity": "dressing"
    },
    {
        "name": "Marek Siemens",
        "pin": "m",
        "employeeId": "ID-2",
        "isActive": true,
        "isAtWork": false,
        "activity": "dressing"
    },
    {
        "name": "Alex Gucci",
        "pin": "a",
        "employeeId": "ID-3",
        "isActive": true,
        "isAtWork": false,
        "activity": "cleaning"
    },
    {
        "name": "Artur Snickers",
        "pin": "a",
        "employeeId": "ID-4",
        "isActive": true,
        "isAtWork": false,
        "activity": "cleaning"
    },
    {
        "name": "Carl Lenovo",
        "pin": "c",
        "employeeId": "ID-5",
        "isActive": true,
        "isAtWork": false,
        "activity": "other"
    },
    {
        "name": "Thomas Lenovo",
        "pin": "t",
        "employeeId": "ID-6",
        "isActive": true,
        "isAtWork": false,
        "activity": "other"
    },
    {
        "name": "Thomas Snickers",
        "pin": "t",
        "employeeId": "ID-7",
        "isActive": true,
        "isAtWork": false,
        "activity": "absence"
    },
    {
        "name": "Daniel Siemens",
        "pin": "d",
        "employeeId": "ID-8",
        "isActive": true,
        "isAtWork": false,
        "activity": "absence"
    },
    {
        "name": "Joanna Philips",
        "pin": "j",
        "employeeId": "ID-9",
        "isActive": true,
        "isAtWork": false,
        "activity": "absence"
    },
    {
        "name": "Thomas Siemens",
        "pin": "t",
        "employeeId": "ID-10",
        "isActive": !!!true,
        "isAtWork": false,
        "activity": "absence"
    }
]

export default employees;

