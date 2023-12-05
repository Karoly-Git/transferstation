// React Imports
import React, { useState } from "react";
// Data Imports
import database from '../../../js/database';
// Icon Imports
import { BiFilterAlt as FilterIcon } from 'react-icons/bi';

export default function Filter() {

    const systemStartingDate = "2023-04-17"; // date of launching the system
    const filterGratestDate = "2023-04-21"; // current date

    const [activeChecked, setActiveChecked] = useState(true);
    const [inactiveChecked, setInactiveChecked] = useState(false);

    const [atWorkChecked, setAtWorkChecked] = useState(true);
    const [offWorkChecked, setOffWorkChecked] = useState(false);

    const [dressingChecked, setDressingChecked] = useState(false);
    const [cleaningChecked, setCleaningChecked] = useState(false);
    const [absenceChecked, setAbsenceChecked] = useState(false);
    const [otherChecked, setOtherChecked] = useState(false);

    const [nipChecked, setNipChecked] = useState(false);
    const [occChecked, setOccChecked] = useState(false);
    const [mixedPaperChecked, setMixedPaperChecked] = useState(false);

    const [amChecked, setAmChecked] = useState(true);
    const [pmChecked, setPmChecked] = useState(true);

    const [activeWorkers, setActiveWorkers] = useState(database.filter(worker => worker.isActive));
    const [inactiveWorkers, setInactiveWorkers] = useState([]);

    const [workersAtWork, setWorkersAtWork] = useState(database.filter(worker => worker.isAtWork));
    const [workersOffWork, setWorkersOffWork] = useState(database.filter(worker => !worker.isAtWork));

    const [dressingWorkers, setDressingWorkers] = useState(database.filter(worker => worker.activity === "dressing"));
    const [cleaningWorkers, setCleaningWorkers] = useState(database.filter(worker => worker.activity === "cleaning"));
    const [workersOnAbsence, setWorkersOnAbsence] = useState(database.filter(worker => worker.activity === "absence"));
    const [workersOnOtherTask, setWorkersOnOtherTask] = useState(database.filter(worker => worker.activity === "other"));

    return (
        <div className="filter">
            <div className="head-box">
                <span>Filter</span>
                <div>
                    <FilterIcon className="icon" />
                </div>
            </div>

            <div className="filter-box is-active">
                <label htmlFor="inp-active">Active
                    <input
                        onChange={() => {
                            setActiveChecked(!activeChecked);
                            setActiveWorkers(!activeChecked ? database.filter(worker => worker.isActive) : [])
                        }}
                        type="checkbox"
                        defaultChecked
                        id="inp-active"
                    />
                </label>
                <label htmlFor="inp-inactive">Inactive
                    <input
                        onChange={() => {
                            setInactiveChecked(!inactiveChecked);
                            setInactiveWorkers(!inactiveChecked ? database.filter(worker => !worker.isActive) : [])
                        }}
                        type="checkbox"
                        id="inp-inactive"
                    />
                </label>
            </div>

            <div className="filter-box is-at-work">
                <label htmlFor="inp-atwork">At work
                    <input
                        onChange={() => {
                            setAtWorkChecked(!atWorkChecked);
                            console.log(!atWorkChecked);
                        }}
                        type="checkbox"
                        defaultChecked
                        id="inp-atwork"
                    />
                </label>
                <label htmlFor="inp-offwork">Off
                    <input
                        onChange={() => {
                            setOffWorkChecked(!offWorkChecked);
                            console.log(!offWorkChecked);
                        }}
                        type="checkbox"
                        id="inp-offwork"
                    />
                </label>
            </div>

            <div className="filter-box activity">
                <label htmlFor="inp-dressing">Dressing
                    <input
                        onChange={() => {
                            setDressingChecked(!dressingChecked);
                            console.log(!dressingChecked);
                        }}
                        type="checkbox"
                        id="inp-dressing"
                    />
                </label>
                <label htmlFor="inp-cleaning">Cleanin
                    <input
                        onChange={() => {
                            setCleaningChecked(!cleaningChecked);
                            console.log(!cleaningChecked);
                        }}
                        type="checkbox"
                        id="inp-cleaning"
                    />
                </label>
            </div>

            <div className="filter-box activity">
                <label htmlFor="inp-absence">Absence
                    <input
                        onChange={() => {
                            setAbsenceChecked(!absenceChecked);
                            console.log(!absenceChecked);
                        }}
                        type="checkbox"
                        id="inp-absence"
                    />
                </label>
                <label htmlFor="inp-other">Other
                    <input
                        onChange={() => {
                            setOtherChecked(!otherChecked);
                            console.log(!otherChecked);
                        }}
                        type="checkbox"
                        id="inp-other"
                    />
                </label>
            </div>

            <div className="display">
                {
                    database
                        .filter((worker, index) =>
                            ((activeChecked && worker.isActive) || (inactiveChecked && !worker.isActive)) &&  // filter if: ACTIVE or INACTIVE, or both
                            ((atWorkChecked && worker.isAtWork) || (offWorkChecked && !worker.isAtWork))      // filter if: worker is AT WORK or OFF, or both
                        )
                        .filter((worker, index) =>
                            (dressingChecked && worker.activity === "dressing") ||  // filter if: worker is DRESSING
                            (cleaningChecked && worker.activity === "cleaning") ||  // filter if: worker is CLEANING
                            (absenceChecked && worker.activity === "absence") ||    // filter if: worker is ABSENCE
                            (otherChecked && worker.activity === "other")           // filter if: worker is doing OTHER task
                        )
                        .map((worker, index) => <h3 key={index}>{worker.name} - {worker.isActive ? "active" : "inactive"} - {worker.isAtWork ? "at work" : "off"} - {worker.activity}</h3>)
                }
            </div>

            {false && <div className="middle-container">
                <div className="activity-box">
                </div>
                <div className="right-box">
                    <div className="materials">
                        <label htmlFor="inp-nip">NiP
                            <input
                                onChange={() => {
                                    setNipChecked(!nipChecked);
                                    console.log(!nipChecked);
                                }}
                                type="checkbox"
                                id="inp-nip"
                            />
                        </label>
                        <label htmlFor="inp-occ">OCC
                            <input
                                onChange={() => {
                                    setOccChecked(!occChecked);
                                    console.log(!occChecked);
                                }}
                                type="checkbox"
                                id="inp-occ"
                            />
                        </label>
                        <label htmlFor="inp-mixedPaper">Mixed paper
                            <input
                                onChange={() => {
                                    setMixedPaperChecked(!mixedPaperChecked);
                                    console.log(!mixedPaperChecked);
                                }}
                                type="checkbox"
                                id="inp-mixedPaper"
                            />
                        </label>
                    </div>
                    <div className="shift-box">
                        <label htmlFor="inp-am">AM
                            <input
                                onChange={() => {
                                    setAmChecked(!amChecked);
                                    console.log(!amChecked);
                                }}
                                type="checkbox"
                                defaultChecked
                                id="inp-am"
                            />
                        </label>
                        <label htmlFor="inp-pm">PM
                            <input
                                onChange={() => {
                                    setPmChecked(!pmChecked);
                                    console.log(!pmChecked);
                                }}
                                type="checkbox"
                                defaultChecked
                                id="inp-pm"
                            />
                        </label>
                    </div>
                </div>
            </div>}
            {false && <div className="dates">
                <input
                    type="date"
                    id="date-start"
                    name="date-start"
                    min={systemStartingDate}
                    max={filterGratestDate}
                />
                <input
                    type="date"
                    id="date-finish"
                    name="date-finish"
                    min={systemStartingDate}
                    max={filterGratestDate}
                />
            </div>}
            {false && <div className="times">
                <input
                    type="time"
                    id="time-start"
                    name="time-start"
                />
                <input
                    type="time"
                    id="time-finish"
                    name="time-finish"
                />
            </div>}
        </div>
    );
}

/**
 * 
 * 
 * 
 *             {
                database
                    .filter(myData => employees.filter(employee => employee.employeeId === myData.employeeId)[0].isActive) // filter inactive employees out
                    .sort((a, b) => {
                        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    })
                    .filter(myData => myId === 'all' ? true : myData.employeeId === myId) // filter by employee
                    .filter(myData => activity === 'all' ? true : employees.filter(emp => emp.employeeId === myData.employeeId)[0].activity === activity) // filter by activity
                    .map((myData, index) =>
                        <div className="data-box" key={index + 'myData'}>
                            <h2>{myData.name}</h2>
                            <h4>{myData.employeeId} - {employees.filter(e => e.employeeId === myData.employeeId)[0].employeeId}</h4>
                        </div>
                    )
            }

 * 
 * 
 *             {
                employees
                    .sort((a, b) => {
                        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
                        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
                        if (nameA < nameB) {
                            return -1;
                        }
                        if (nameA > nameB) {
                            return 1;
                        }
                        // names must be equal
                        return 0;
                    })
                    .map((employee, index) =>
                        <div className={`worker ${!employee.isActive && inactiveHidden ? 'hidden-inactive' : ''}`} key={index + 'empl'}>
                            <h2 className={employee.isActive ? 'active' : 'inactive'} >{employee.name}</h2>
                            <h4 className={employee.isActive ? 'active' : 'inactive'}>{employee.isActive ? 'active' : 'inactive'} ... {employee.employeeId}</h4>
                        </div>)
            }
            <p>-----------------------</p>
            {
                database
                    .filter(empl => inactiveHidden ? empl.isActive === true : true)
                    .filter(empl => isAtWorkDisplayed ? true : empl.isAtWork === true)
                    .map(employee => <div>active: {JSON.stringify(employee.isActive)} - {employee.name} - {employee.employeeId} - in: {JSON.stringify(employee.isAtWork)}</div>)
            }




                        <label htmlFor="is-active">
                Inactive
                <input
                    onChange={(e) => {
                        handleIsActiveCheckboxChange(e.target.checked);
                        setInactiveHidden(!inactiveHidden);
                    }}
                    type="checkbox"
                    id="is-active"
                />
            </label>
            <label htmlFor="is-at-work">
                Is at work only
                <input
                    onChange={(e) => {
                        //handleIsAtWorkCheckboxChange(e.target.checked);
                        setIsAtWorkDisplayed(!isAtWorkDisplayed);
                    }}
                    type="checkbox"
                    id="is-at-work"
                />
            </label>


 */
