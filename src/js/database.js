/*import employees from './employees';

function generateDatabase(employees) {
    let database = [];
    employees.forEach((employee) => {
        database.push(
            {
                name: employee.name,
                employeeId: employee.employeeId,
                workSession: {
                    dressing: [],
                    cleaning: [],
                    other: [],
                    abcence: []
                }
            }
        );
    });
    return database;
}

let database = generateDatabase(employees);

console.log(database);*/

let database = [
    {
        "name": "Gosia Levis",
        "pin": "g",
        "employeeId": "ID-1",
        "isActive": !!!true,
        "isAtWork": false,
        "activity": "absence",
        "workSession": {
            "dressing": [
                {
                    "start": new Date("Wed Apr 25 2023 07:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 25 2023 09:00:00 GMT+0100 (British Summer Time)"),
                    "materials": {
                        "occ": 3,
                        "nip": 2,
                        "mixedPaper": 4,
                        "plastic": 0,
                        "steel": 0
                    }
                },
                {
                    "start": new Date("Wed Apr 25 2023 10:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 25 2023 12:00:00 GMT+0100 (British Summer Time)"),
                    "materials": {
                        "occ": 3,
                        "nip": 2,
                        "mixedPaper": 4,
                        "plastic": 0,
                        "steel": 0
                    }
                },
                {
                    "start": new Date("Wed Apr 26 2023 07:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 26 2023 09:00:00 GMT+0100 (British Summer Time)"),
                    "materials": {
                        "occ": 3,
                        "nip": 2,
                        "mixedPaper": 4,
                        "plastic": 0,
                        "steel": 0
                    }
                },
                {
                    "start": new Date("Wed Apr 27 2023 07:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 09:00:00 GMT+0100 (British Summer Time)"),
                    "materials": {
                        "occ": 3,
                        "nip": 2,
                        "mixedPaper": 4,
                        "plastic": 0,
                        "steel": 0
                    }
                },
                {
                    "start": new Date("Wed Apr 27 2023 10:00:00 GMT+0100 (British Summer Time)"),
                    "finish": null,
                    "materials": {
                        "occ": null,
                        "nip": null,
                        "mixedPaper": null,
                        "plastic": null,
                        "steel": null
                    }
                }
            ],
            "cleaning": [
                {
                    "start": new Date("Wed Apr 27 2023 06:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 07:00:00 GMT+0100 (British Summer Time)"),
                    "task": "Cleaning-1"
                },
                {
                    "start": new Date("Wed Apr 27 2023 09:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 09:30:00 GMT+0100 (British Summer Time)"),
                    "task": "Cleaning-2"
                }
            ],
            "other": [],
            "abcence": [
                {
                    "start": new Date("Wed Apr 27 2023 09:30:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 10:00:00 GMT+0100 (British Summer Time)"),
                    "reason": "Break"
                }
            ]
        }
    },
    {
        "name": "Marek Siemens",
        "pin": "m",
        "employeeId": "ID-2",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "dressing",

        "workSession": {
            "dressing": [
                {
                    "start": new Date("Wed Apr 27 2023 07:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 09:00:00 GMT+0100 (British Summer Time)"),
                    "materials": {
                        "occ": 3,
                        "nip": 2,
                        "mixedPaper": 4,
                        "plastic": 0,
                        "steel": 0
                    }
                },
                {
                    "start": new Date("Wed Apr 27 2023 10:00:00 GMT+0100 (British Summer Time)"),
                    "finish": null,
                    "materials": {
                        "occ": null,
                        "nip": null,
                        "mixedPaper": null,
                        "plastic": null,
                        "steel": null
                    }
                }
            ],
            "cleaning": [
                {
                    "start": new Date("Wed Apr 27 2023 06:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 07:00:00 GMT+0100 (British Summer Time)"),
                    "task": "Cleaning-1"
                },
                {
                    "start": new Date("Wed Apr 27 2023 09:00:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 09:30:00 GMT+0100 (British Summer Time)"),
                    "task": "Cleaning-2"
                }
            ],
            "other": [],
            "abcence": [
                {
                    "start": new Date("Wed Apr 27 2023 09:30:00 GMT+0100 (British Summer Time)"),
                    "finish": new Date("Wed Apr 27 2023 10:00:00 GMT+0100 (British Summer Time)"),
                    "reason": "Break"
                }
            ]
        }
    },
    {
        "name": "Alex Gucci",
        "pin": "a",
        "employeeId": "ID-3",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "dressing",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Artur Snickers",
        "pin": "a",
        "employeeId": "ID-4",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "cleaning",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Carl Lenovo",
        "pin": "c",
        "employeeId": "ID-5",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "cleaning",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Thomas Lenovo",
        "pin": "t",
        "employeeId": "ID-6",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "other",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Thomas Snickers",
        "pin": "t",
        "employeeId": "ID-7",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "other",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Daniel Siemens",
        "pin": "d",
        "employeeId": "ID-8",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "absence",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Joanna Philips",
        "pin": "j",
        "employeeId": "ID-9",
        "isActive": true,
        "isAtWork": !!!false,
        "activity": "absence",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    },
    {
        "name": "Thomas Siemens",
        "pin": "t",
        "employeeId": "ID-10",
        "isActive": true,
        "isAtWork": false,
        "activity": "absence",
        "workSession": {
            "dressing": [],
            "cleaning": [],
            "other": [],
            "abcence": []
        }
    }
]

export default database;

