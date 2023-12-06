// React Imports
import React, { useState, useRef, useEffect } from "react";
// Icon and Image Imports
import { IoIosSearch as SearchIcon } from "react-icons/io";
import { MdDensitySmall as ShowAllIcon } from "react-icons/md";
// Style Imports
import "../../css/permit-numbering.css";
// Component Imports
import NavButton from "./NavButton";
// Animation Imports
import { motion as m } from 'framer-motion';

export default function PermitNumbering() {
    // State
    const [contractors, setContractors] = useState([]);
    const [users, setUsers] = useState([]);
    const [permits, setPermits] = useState([]);

    const [nextPermitID, setNextPermitID] = useState(0);
    const [workPermits, setWorkPermits] = useState(permits);
    const searchInputRef = useRef();
    const passwordInputRef = useRef();
    const userSelectRef = useRef();

    const [isShowAllClicked, setIsShowAllClicked] = useState(false);

    const [searchInputValue, setSearchInputValue] = useState(""); // resetProcess 1
    const [passwordInputValue, setPasswordInputValue] = useState(""); // resetProcess 2

    const [displayedContractors, setDisplayedContractors] = useState([]); // resetProcess 3

    const [selectedUserValue, setSelectedUserValue] = useState(0); // resetProcess 4

    const [currentUserID, setCurrentUserID] = useState(0); // resetProcess 5
    const [currentPermit, setCurrentPermit] = useState({}); // resetProcess 7

    const [currentContractor, setCurrentContractor] = useState(""); // resetProcess 6
    const [activeSlide, setActiveSlide] = useState(1);

    const URL = "https://transferstation-ac939f5c93a1.herokuapp.com/";
    //const URL = "http://localhost:8000/";


    const sendPermitToBackend = async () => {
        const newPermit = {
            id: null,
            issuer: users.filter((user) => user.id === currentUserID)[0].name,
            contractor: currentContractor,
            date: null,
            time: null,
            note: "-",
        };

        try {
            const response = await fetch(URL + 'send-new-permit',
                {
                    method: 'POST',
                    mode: 'cors',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify(newPermit),
                }
            );

            if (!response.ok) {
                console.log('Please add error handling!!!');
                throw new Error(`Failed to send data. Status: ${response.status}`);
            }

            const result = await response.json();
            console.log(result);
            setCurrentPermit(result);

        } catch (error) {
            console.error('Error:', error.message);
        } /*finally {
            Do something if needed
        }*/
    };


    useEffect(() => {
        const fetchData = async (filename, setData) => {
            try {
                const response = await fetch(URL + filename)

                if (!response.ok) {
                    throw new Error("Network response was not ok")
                }

                const jsonData = await response.json();

                setData(jsonData);

                if (filename === 'permits') {
                    setNextPermitID(jsonData.length + 1);
                    console.log('Next Permit ID:', jsonData.length + 1);
                }

            } catch (error) {
                console.error('Error fetching data:', error);
            } /*finally {
                console.error('Fetching finished.');
            }*/
        };

        fetchData('contractors', setContractors);
        fetchData('users', setUsers);
        fetchData('permits', setPermits);
    }, []);

    function resetProcess() {
        setSearchInputValue(""); // const 1
        setDisplayedContractors([]); // const 3
        setCurrentContractor(""); // const 6
        setSelectedUserValue(0); // const 4
        setCurrentUserID(0); // const 5
        setCurrentPermit({}); // const 7
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

        setDisplayedContractors((prevContractors) => [...filteredContractors].sort((a, b) => a.name.localeCompare(b.name)));
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
        <m.div className="page permit-numbering"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
        >

            <h1>Permit numbering</h1>

            <div id="frame">
                {activeSlide === 1 &&
                    <m.div
                        className="slide step1"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >

                        <h3>Choose contractor</h3>

                        <div id="filter-box">
                            <div className="wrapper">
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
                                {false && <ShowAllIcon
                                    className="icon show-all-icon"
                                    onClick={() => {
                                        setIsShowAllClicked(prevState => !prevState);
                                        setDisplayedContractors((prevContractors) => !isShowAllClicked ? [...contractors] : []);
                                    }}
                                />}
                            </div>
                        </div>

                        <div
                            id="contractor-option-box"
                            className={displayedContractors.length ? "visible-element" : "invisible-element"}
                            style={displayedContractors.length <= 3 ? { overflow: "hidden" } : { overflow: "scroll" }}>
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
                                                    .toLowerCase()
                                                    .includes(searchInputValue.toLowerCase()),
                                            );
                                            setDisplayedContractors([...filteredContractors].sort((a, b) => a.name.localeCompare(b.name)));
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
                    </m.div>}

                {activeSlide === 2 &&
                    <m.div
                        className="slide step2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <h3>Verify it's you</h3>
                        <div id="user-box">
                            <div>
                                <span>Name:</span>
                                <div className="wrapper">
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
                            </div>
                            <div
                                className={currentUserID === 0 ? "invisible-element" : "visible-element"}>
                                <span>Password:</span>
                                <div className="wrapper">
                                    <input
                                        type="password"
                                        onChange={handlePasswordInputChange}
                                        value={passwordInputValue}
                                        ref={passwordInputRef}
                                    />
                                </div>
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
                                    sendPermitToBackend();
                                    addWorkPermit();
                                    setActiveSlide(3);
                                }}
                            />
                        </div>
                    </m.div>}

                {activeSlide === 3 &&
                    <m.div
                        className="slide step3"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    >
                        <h3>New permit details</h3>
                        <div id="display">
                            <div>
                                <span>Permit number:</span>
                                {currentPermit.id}
                            </div>
                            <div>
                                <span>Contractor:</span>
                                {currentPermit.contractor}
                            </div>
                            <div>
                                <span>Issued by:</span>
                                {currentPermit.issuer}
                            </div>
                            <div>
                                <span>Date:</span>
                                {currentPermit.date}
                            </div>
                        </div>

                        <div className="btn-box">
                            <NavButton
                                className='btn'
                                text="reset"
                                onClick={() => {
                                    resetProcess();
                                    setActiveSlide(1);
                                }} />
                        </div>
                    </m.div>}
            </div>
        </m.div>
    );
}
