import React, { useState } from 'react';
import './Navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faR } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faR} />;

export default function Navbar (props) {
   
    const [activeLink,setActiveLink] = useState('');

    return (
            <nav className="navbar navbar-expand-lg position-sticky top-0">
                <div className="container">
                    <a className="navbar-brand selectedColor selectedBtn px-3 App-logo" href="/#header">{element}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item" onClick={()=>setActiveLink('about')} >
                            <a className="nav-link baseColor" aria-current="page" href="/#about" style={{color:(activeLink === 'about'&&'#64FFDA')}}> About</a>
                        </li>
                        <li className="nav-item" onClick={()=>setActiveLink('projects')}>
                            <a className="nav-link baseColor" href="/#projects" style={{color:(activeLink === 'projects'&&'#64FFDA')}}>Projects</a>
                        </li>
                        <li className="nav-item" onClick={()=>setActiveLink('tools')}>
                            <a className="nav-link baseColor" href="/#tools" style={{color:(activeLink === 'tools'&&'#64FFDA')}}>Tools</a>
                        </li>
                        <li className="nav-item" onClick={()=>setActiveLink('contact')}>
                            <a className="nav-link baseColor" href="/#contact" style={{color:(activeLink === 'contact'&&'#64FFDA')}}>Contact</a>
                        </li>
                        <li className="nav-item" onClick={()=>setActiveLink('resume')}>
                            <a className="nav-link selectedColor selectedBtn" href="/assets/Roya_Malikzada_CV.pdf" download style={{color:(activeLink === 'resume'&&'#64FFDA')}}>Download CV</a>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
    )
}