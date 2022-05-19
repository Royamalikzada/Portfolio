import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowsToDot } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faArrowsToDot} />;
const list = <span className='selectedColor'>{element}</span>;


export default function About (props) {
    return (
        <div className='container marginDiv'>
            <hr className='selectedbtn mb-5'  id="about" />
            <h2 className='lightColor'> About me</h2>
            <div className='row justify-content-evenly'>
                <div className='col-sm-12 col-md-6'>
                    <p className='baseColor mt-3'>
                        Hello! My name is Roya and I am a motivated junior developer ready to face new experiences, 
                        always inclined to learn <span className='selectedColor'>new technologies</span> that lead me to grow and improve 
                        myself as an individual and as a developer.
                    </p>
                    <p className='baseColor mt-3'>
                        Even if I am quite young in this field I am well equiped to encounter all bugs throughout my path 
                        in order to reach determined objectives. My work <span className='selectedColor'>experiences</span> from different fields including multinational environments 
                        assist me to obtain and improve required competences enable to work in a team, pursuing common goals, 
                        arranging tasks in order to achieve best results with available resources.
                    </p>
                    <p className='baseColor mt-3'>
                        Among my strengths I would like to emphasize my passion for studying, especially foreign <span className='selectedColor'>languages</span>.
                        I find similarities between foreign and programming languages: in both case you have to understand the logic behind of it and 
                        apply correct methods to conquer the field of study. 
                    </p>
                    <p className='baseColor mt-3'>
                        And of course, who we are without sacred <span className='selectedColor'>googling</span>  skills! All this information with more details 
                        you can find checking out my <span className='selectedColor'>resume</span> above. 
                    </p>
                    <div className='baseColor mt-3'>
                        Here are a few technologies that I used to create current web application:
                        <div className='row mt-3'>
                            <div className='col-6'>
                                <ul style={{listStyle: "none"}}>
                                    <li>{list} HTML</li> 
                                    <li>{list} CSS</li>
                                    <li> {list} Bootstrap</li>
                                </ul>
                            </div>
                            <div className='col-6'>
                                <ul style={{listStyle: "none"}}>
                                    <li> {list} JavaScript</li>
                                    <li> {list} React js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-12 col-md-6'>
                    <div>
                        <img src="../../../images/photo_profile.jpg" alt=""/>
                    </div>    
                </div>

            </div>
        </div>
    )
}