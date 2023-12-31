// React Imports
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// Config Imports
import { config } from './permit_numbering/data/config';
// Icon Imports
import { RxHamburgerMenu as HamburgerIcon } from 'react-icons/rx';
import { ImHome as HomeIcon } from "react-icons/im";
import { CgClose as CloseIcon } from 'react-icons/cg';
import { AiOutlinePlus as PlusIcon } from 'react-icons/ai';
import { AiOutlineMinus as MinusIcon } from 'react-icons/ai';
import { AiOutlineEdit as LogIcon } from 'react-icons/ai';
import { BsTruck as TruckIcon } from 'react-icons/bs';
import { CiSettings as AdminIcon } from 'react-icons/ci';
import { AiOutlineDown as DownIcon } from 'react-icons/ai';
import { BiCube as CubeIcon } from 'react-icons/bi';
import { TbShredder as CraneIcon } from 'react-icons/tb';
import { CgCompress as BalerIcon } from 'react-icons/cg';
import { FaFileDownload as DownloadIcon } from "react-icons/fa";

export default function MobileNavigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMrfOpen, setIsMrfOpen] = useState(false);
    const [isTsOpen, setIsTsOpen] = useState(false);

    const [isMrfLogsOpen, setIsMrfLogsOpen] = useState(false);
    const [isTsLogsOpen, setIsTsLogsOpen] = useState(false);

    const [menuHeight, setMenuHeight] = useState(102);

    const openCloseMenu = () => {
        setMenuHeight(document.querySelector('.menu').clientHeight);
        setIsMenuOpen(!isMenuOpen)
    };

    const openCloseMRF = () => {
        setIsMrfOpen(!isMrfOpen);
        setIsTsOpen(false);
    };

    const openCloseTS = () => {
        setIsTsOpen(!isTsOpen);
        setIsMrfOpen(false);
    };

    const setMeActie = (e) => {
        [...document.querySelectorAll('.menu a')].forEach(element => {
            element.style.textDecoration = 'none';
        })
        e.target.style.textDecoration = 'underline';
        setIsMenuOpen(false);
        openCloseMenu();
    };

    const URL = config.isLocalServer ? config.url.local : config.url.heroku;

    const handleDownloadRequest = async () => {
        let userImput = prompt("Download key needed!");

        if (config.downloadKeys.includes(userImput)) {
            try {
                const response = await fetch(URL + "download-permits-file");
                const blob = await response.blob();
                const url = window.URL.createObjectURL(new Blob([blob]));
                const link = document.createElement('a');
                link.href = url;
                let date = new Date();
                let fileName = date.toLocaleDateString().split('/').join('') + "_" + date.toLocaleTimeString().split(':').join('') + "_permits.xlsx";
                link.setAttribute('download', fileName);
                document.body.appendChild(link);
                link.click();
                link.parentNode.removeChild(link);
            }

            catch (error) {
                console.error('Error downloading file:', error);
            }
        } else {
            alert("Wrong key!");
        }
    };


    return (
        <nav className='mobile-navigation'>
            <div className="head-container">
                <div
                    className={`hamburger-box ${isMenuOpen ? 'hamburger-box-open' : ''}`}
                    onClick={() => openCloseMenu()}
                >
                    <CloseIcon className='icon' />
                    <HamburgerIcon className='icon' />
                </div>
                <h2>Test Version</h2>
                <Link to={'/'}>
                    <HomeIcon className='icon' id='home-icon' />
                </Link>
            </div>

            <ul className='menu'>
                <li
                    className='mrf'
                    style={{ marginTop: `${isMenuOpen ? '0' : -1 * menuHeight + 'px'}` }}
                >
                    <div
                        className='sub1-title'
                        onClick={() => openCloseMRF()}
                    >
                        <h2>
                            MRF
                        </h2>
                        <div className='icon-box'>
                            {!isMrfOpen && <PlusIcon className='icon' />}
                            {isMrfOpen && <MinusIcon className='icon' />}
                        </div>
                    </div>
                    <ul className='sub1-menu mrf-list'>
                        <li
                            className='has-sub'
                            style={{ marginTop: `${isMrfOpen ? '0' : isMrfLogsOpen ? '-300px' : '-100px'}` }}
                        >
                            <div
                                className='sub2-title'
                                onClick={() => setIsMrfLogsOpen(!isMrfLogsOpen)}
                            >
                                <h3>
                                    <LogIcon className='icon' /> Logs
                                </h3>
                                <DownIcon
                                    className='icon down-icon'
                                    style={{ transform: `${isMrfLogsOpen ? 'rotate(-180deg)' : 'rotate(0)'}` }}
                                />
                            </div>
                            <ul className="sub2-menu mrf-logs-list">
                                <li style={{ marginTop: `${isMrfLogsOpen ? '0' : -4 * 50 + 'px'}` }}>
                                    <Link
                                        to={'/mrf/logs/crane'}
                                        onClick={setMeActie}
                                    >
                                        <CraneIcon className='icon' /> Crane
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/mrf/logs/baler'}
                                        onClick={setMeActie}
                                    >
                                        <BalerIcon className='icon' /> Baler
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/mrf/logs/dressing'}
                                        onClick={setMeActie}
                                    >
                                        <CubeIcon className='icon' /> Dressing
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to={'/mrf/logs/collections'}
                                        onClick={setMeActie}
                                    >
                                        <TruckIcon className='icon' /> Collections
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        {false && <li>
                            <Link
                                to={'/mrf/admin'}
                                onClick={setMeActie}
                            >
                                <AdminIcon className='icon' /> Admin
                            </Link>
                        </li>}
                        <li>
                            <Link
                                to={'/permit-numbering'}
                                onClick={setMeActie}
                            >
                                {false && <AdminIcon className='icon' />}
                                Permit numbering
                            </Link>
                            <DownloadIcon title="Click to download 'permits.xlsx'" className='icon' id="download-icon" onClick={handleDownloadRequest} />
                        </li>
                    </ul>
                </li>

                <li className='ts'>
                    <div
                        className='sub1-title'
                        onClick={() => openCloseTS()}
                    >
                        <h2>
                            TS
                        </h2>
                        <div
                            className='icon-box'>
                            {!isTsOpen && <PlusIcon className='icon' />}
                            {isTsOpen && <MinusIcon className='icon' />}
                        </div>
                    </div>
                    <ul
                        className='sub1-menu ts-list'>
                        <li
                            className='has-sub'
                            style={{ marginTop: `${isTsOpen ? '0' : isTsLogsOpen ? '-150px' : '-100px'}` }}
                        >
                            <div
                                className='sub2-title'
                                onClick={() => setIsTsLogsOpen(!isTsLogsOpen)}
                            >
                                <h3>
                                    <LogIcon className='icon' /> Logs
                                </h3>
                                <DownIcon
                                    className='icon'
                                    style={{ transform: `${isTsLogsOpen ? 'rotate(-180deg)' : 'rotate(0)'}` }}
                                />
                            </div>
                            <ul className="sub2-menu ts-logs-list">
                                <li style={{ marginTop: `${isTsLogsOpen ? '0' : -1 * 50 + 'px'}` }}>
                                    <Link
                                        to={'/ts/logs/compactor-log'}
                                        onClick={setMeActie}
                                    >
                                        <CubeIcon className='icon' /> Compactors
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link
                                to={'/ts/admin'}
                                onClick={setMeActie}
                            >
                                <AdminIcon className='icon' /> Admin
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul >
        </nav >
    )
}
