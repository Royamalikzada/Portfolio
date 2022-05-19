import React from 'react';
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const location = <span className='selectedColor pe-2'><FontAwesomeIcon icon={faLocationPin} /></span>;
const envelope = <span className='selectedColor pe-2'><FontAwesomeIcon icon={faEnvelope} /></span>;
const linkedin = <span className='selectedColor pe-2'><FontAwesomeIcon icon={faLinkedin} /></span>;

export default function Contact (props) {
    return (
        <div className='container marginDiv'>
            <hr className='selectedbtn' />
            <h2 className='lightColor mb-5'>Contact</h2>
            <div className='row justify-content-evenly'>
                <div className="col-lg-4 col-md-6 col-sm-12 pt-3 mb-3 visibleBorder lightColor">
                    <h5> {location} Location:</h5>
                    <p className="baseColor ps-5">Rome, Italy</p>
                    <h5>{envelope} Email:</h5>
                    <p className="baseColor ps-5">royamelikzade@gmail.com</p>
                    <h5> {linkedin} LinkedIn:</h5>
                    <a className="baseColor ps-5" href='https://www.linkedin.com/in/roya-malikzada-153765184/' target='_blank'>Profile</a>
                </div>
                <div className="col-lg-7 col-md-6 col-sm-12 pt-3 visibleBorder lightColor">
                    <div className="mb-3">
                        <div className="row justify-content-between">
                            <div className="col-6">                        
                                <label htmlFor="exampleFormControlInput0" className="form-label">Your name </label>
                                <input type="text" className="form-control" id="messageName" placeholder="your name"/>
                            </div>
                            <div className="col-6">
                                <label htmlFor="exampleFormControlInput1" className="form-label" >Your email </label>
                                <input type="email" className="form-control" placeholder="your email" id="messageEmail"/>
                            </div>
                        </div>
                        <label  htmlFor="exampleFormControlInput2" className="form-label mt-1" >Subject</label>
                        <input type="text" className="form-control" placeholder="subject" id="messageSubject"/>
                      </div>
                      <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                        <textarea className="form-control" rows="3" id="message"></textarea>
                      </div>
                      <button className="selectedBtn selectedColor mb-2 p-2" id="messageBtn">Send message</button>
                      <ul id="messageLista" className="list-group"></ul>
                </div>

            </div>

        </div>
    )
}