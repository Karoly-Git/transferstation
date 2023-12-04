// React Imports
import React, { useState, useRef, useEffect } from "react";
// Icon Imports
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { IoIosArrowDown as ArrowIcon } from "react-icons/io";
// Style Imports
import "../../css/permit-numbering.css";
// Data Imports
import { contractors } from "../../data/contractors";
import { users } from "../../data/users";
import { permits } from "../../data/permits";
import NavButton from "./NavButton";

export default function PermitNumbering() {
    // Constants
    const INITIAL_PERMIT_ID = 4;

    // State
    const [nextPermitID, setNextPermitID] = useState(INITIAL_PERMIT_ID);
    const [workPermits, setWorkPermits] = useState(permits);
    const [newWorkPermits, setNewPermits] = useState({});
    const searchInputRef = useRef();
    const passwordInputRef = useRef();
    const userSelectRef = useRef();
    const [searchInputValue, setSearchInputValue] = useState(""); // resetProcess 1
    const [passwordInputValue, setPasswordInputValue] = useState(""); // resetProcess 2
    const [displayedContractors, setDisplayedContractors] = useState([]); // resetProcess 3
    const [selectedUserValue, setSelectedUserValue] = useState(0); // resetProcess 4
    const [currentUserID, setCurrentUserID] = useState(0); // resetProcess 5
    const [currentContractor, setCurrentContractor] = useState(""); // resetProcess 6
    const [activeSlide, setActiveSlide] = useState(1);

    function resetProcess() {
        setSearchInputValue(""); // const 1
        setDisplayedContractors([]); // const 3
        setCurrentContractor(""); // const 6
        setSelectedUserValue(0); // const 4
        setCurrentUserID(0); // const 5
        setPasswordInputValue(""); // const 2
    }

    // Event Handlers
    function handleSearchInputChange(e) {
        const value = e.target.value;
        setSearchInputValue(value);

        if (value === "") {
            setDisplayedContractors((prevContractors) => []);
            return;
        }

        let filteredContractors = contractors.filter((contractor) => {
            const contractorName = contractor.name.toLowerCase();
            const searchValue = value.toLowerCase();
            return contractorName.includes(searchValue);
        });

        setDisplayedContractors((prevContractors) => [...filteredContractors]);
        setCurrentContractor(""); // This for setting the bg-color back to original
    }

    function handlePasswordInputChange(e) {
        const value = e.target.value;
        setPasswordInputValue(value);
    }

    function addWorkPermit() {
        let newPermit = {
            id: nextPermitID,
            issuer: users.filter((user) => user.id === currentUserID)[0].name,
            contractor: currentContractor,
            date: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString(),
            note: "",
        };

        let newWorkPermits = [...workPermits];
        newWorkPermits.push(newPermit);

        setWorkPermits((prevWorkPermits) => [...newWorkPermits]);
        setNextPermitID((prevNextPermitID) => prevNextPermitID + 1);
    }

    function handleUserOptionChange(e) {
        let newUserID = Number(e.target.value);
        setCurrentUserID(newUserID);
        setSelectedUserValue(newUserID);
        setPasswordInputValue("");
        passwordInputRef.current.focus();
    }

    return (
        <div className="permit-numbering">

            <h1>Permit numbering</h1>

            <div id="frame">
                {activeSlide === 1 &&
                    <div className="slide step1">

                        <h3>Choose contractor</h3>

                        <div id="filter-box">
                            <SearchIcon
                                className="icon"
                                id="search-icon"
                                onClick={() => searchInputRef.current.focus()}
                            />
                            <input
                                onChange={handleSearchInputChange}
                                value={searchInputValue}
                                type="text"
                                ref={searchInputRef}
                                placeholder="Search for contractor..."
                            />
                        </div>

                        <div id="contractor-option-box"
                            className={displayedContractors.length ? "visible-element" : "invisible-element"}
                            style={displayedContractors.length <= 5 ? { overflow: "hidden" } : {}}>
                            {displayedContractors.map((contractor, index) => (
                                <div
                                    key={index}
                                    className="contractor"
                                    onClick={() => {
                                        if (currentContractor === "") {
                                            setCurrentContractor(contractor.name);
                                            let one = displayedContractors.filter(
                                                (c) => c.name === contractor.name,
                                            );
                                            setDisplayedContractors([...one]);
                                        } else {
                                            let filteredContractors = contractors.filter((e) =>
                                                e.name
                                                    .toLocaleLowerCase()
                                                    .includes(searchInputValue.toLocaleLowerCase()),
                                            );
                                            setDisplayedContractors([...filteredContractors]);
                                            setCurrentContractor("");
                                        }
                                    }}
                                    style={
                                        currentContractor === ""
                                            ? { backgroundColor: "lightgray", color: "black" }
                                            : { backgroundColor: "darkred", color: "white" }
                                    }
                                >
                                    {contractor.name}
                                </div>
                            ))}
                        </div>
                        <div
                            className={currentContractor ? "btn-box visible-element" : "btn-box invisible-element"}
                        >
                            <NavButton className='btn' text="next" onClick={() => setActiveSlide(2)} />
                        </div>
                    </div>}

                {activeSlide === 2 &&
                    <div className="slide step2">
                        <h3>Verify it's you</h3>
                        <div id="user-box">
                            <div>
                                <span>Users:</span>
                                <div className="container">
                                    <select
                                        ref={userSelectRef}
                                        value={selectedUserValue}
                                        name="users"
                                        id="users"
                                        onChange={handleUserOptionChange}
                                    >
                                        {users
                                            .sort((a, b) => a.name.localeCompare(b.name))
                                            .map((user, index) => (
                                                <option key={index} value={user.id}>
                                                    {user.name}
                                                </option>
                                            ))}
                                    </select>
                                </div>
                                <ArrowIcon className="icon" />
                            </div>
                            <div
                                className={currentUserID === 0 ? "invisible-element" : "visible-element"}>
                                <span>Password:</span>
                                <input
                                    type="password"
                                    onChange={handlePasswordInputChange}
                                    value={passwordInputValue}
                                    ref={passwordInputRef}
                                />
                            </div>
                        </div>

                        <div className="btn-box">
                            <NavButton className='btn' text="back" onClick={() => setActiveSlide(1)} />
                            <NavButton
                                className={
                                    users.filter((user) => user.id === currentUserID)[0]
                                        .password === passwordInputValue
                                        ? "btn visible-element"
                                        : "btn invisible-element"
                                }
                                text="request"
                                onClick={() => {
                                    addWorkPermit();
                                    setActiveSlide(3);
                                }}
                            />
                        </div>
                    </div>}

                {activeSlide === 3 &&
                    <div className="slide step3">
                        <h3>New permit details</h3>
                        <div id="display">
                            <div>
                                <span>Permit number:</span>
                                {nextPermitID - 1}
                            </div>
                            <div>
                                <span>Contractor:</span>
                                {currentContractor}
                            </div>
                            <div>
                                <span>Issued by:</span>
                                {users.filter((user) => user.id === currentUserID)[0].name}
                            </div>
                            <div>
                                <span>Date:</span>
                                {
                                    workPermits.filter(
                                        (permit) => permit.id === nextPermitID - 1,
                                    )[0].date
                                }
                            </div>
                        </div>

                        <div className="btn-box">
                            <span onClick={resetProcess}>
                                <NavButton text="reset" />
                            </span>
                        </div>
                    </div>}
            </div>

        </div>
    );
}
