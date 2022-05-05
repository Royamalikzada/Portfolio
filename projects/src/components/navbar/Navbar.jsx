import React from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faR } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faR} />;

export default function Navbar (props) {
    return (
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand selectedColor selectedBtn px-3 App-logo" href="#">{element}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active baseColor" aria-current="page" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active baseColor" href="#">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active baseColor" href="#">Tools</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active baseColor" href="#">Contact</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active selectedColor selectedBtn" href="#">Resume</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}