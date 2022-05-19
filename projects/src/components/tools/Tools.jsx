import React from 'react';
import './Tools.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesRight } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faAnglesRight} />;
const list = <span className='selectedColor pe-2'>{element}</span>;

export default function Tools (props) {
    return (
        <div className='container marginDiv'>
            <hr className='selectedbtn mb-5' id='tools' />
            <h2 className='lightColor mb-5'>Tools</h2>
            <div className='row baseColor fs-3'>
                <div className='col-md-4 col-lg-3 col-sm-6'>
                    <div>
                        <ul style={{listStyle: "none"}}>
                            <li>{list} JavaScript</li>
                            <li>{list} ReactJs</li>
                            <li>{list} jQuery</li>
                            <li>{list} WebPack</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-sm-6'>
                    <div>
                        <ul style={{listStyle: "none"}}>
                            <li>{list} PHP</li>
                            <li>{list} Laravel</li>
                            <li>{list} MySQL</li>
                            <li>{list} MariaDB</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-sm-6'>
                    <div>
                        <ul style={{listStyle: "none"}}>
                            <li>{list} HTML</li>
                            <li>{list} CSS</li>
                            <li>{list} Bootstrap</li>
                            <li>{list} SASS</li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-4 col-lg-3 col-sm-6'>
                    <div>
                        <ul style={{listStyle: "none"}}>
                            <li>{list} REST API</li>
                            <li>{list} WordPress</li>
                            <li>{list} Git</li>
                            <li>{list} PM/Agile</li>
                        </ul>
                    </div>
                </div>
                

            </div>

        </div>
    )
}