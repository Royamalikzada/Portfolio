import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import "./Contact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const location = <span className='selectedColor pe-2'><FontAwesomeIcon icon={faLocationPin} /></span>;
const envelope = <span className='selectedColor pe-2'><FontAwesomeIcon icon={faEnvelope} /></span>;
const linkedin = <span className='selectedColor pe-2'><FontAwesomeIcon icon={faLinkedin} /></span>;

export default function Contact (props) {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = () => {
        alert("Your e-mail has been sent successfully! To avoid spam issue -> call me or find me on Linkedin!");
        window.location.reload();

      }

    return (
        <div className='container marginDiv'>
            <hr className='selectedbtn mb-5' id='contact' />
            <h2 className='lightColor mb-5'>Contact</h2>
            <div className='row justify-content-evenly align-items-stretch'>
                <div className="col-lg-4 col-md-12 pt-3 mb-3 visibleBorder lightColor">
                    <h5> {location} Location:</h5>
                    <p className="baseColor ps-5">Rome, Italy</p>
                    <h5>{envelope} Email:</h5>
                    <p className="baseColor ps-5">royamelikzade@gmail.com</p>
                    <h5> {linkedin} LinkedIn:</h5>
                    <a className="baseColor ps-5" href='https://www.linkedin.com/in/roya-malikzada-153765184/' target='_blank'>Profile</a>
                </div>
                <div className="col-lg-7 col-md-12 pt-3 mb-3 visibleBorder lightColor">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-3">
                            <div className="row justify-content-between">
                                <div className="col-6">                        
                                    <label htmlFor="messageName" className="form-label">Your name </label>
                                    <input type="text" className="form-control" placeholder='your name' {...register('name', { required: true })}/>
                                    {errors.name && <p className='text-danger'>Name is required.</p>}
                                </div>
                                <div className="col-6">
                                    <label htmlFor="messageEmail" className="form-label" >Your email </label>
                                    <input type="email" className="form-control" placeholder="your email" id="messageEmail" {...register('email', { required: true })}/>
                                    {errors.email && <p className='text-danger'>Email is required.</p>}
                                </div>
                            </div>
                            <label  htmlFor="messageSubject" className="form-label mt-1" >Subject</label>
                            <input type="text" className="form-control" placeholder="subject" id="messageSubject" {...register('subject', { required: true })}/>
                            {errors.subject && <p className='text-danger'>Subject is required.</p>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea className="form-control" rows="3" id="message" {...register('message', { required: true })}></textarea>
                            {errors.message && <p className='text-danger'>Message is required.</p>}
                        </div>
                        <button type='submit' className="selectedBtn selectedColor mb-2 p-2" id="messageBtn">Send message</button>
                      </form>
                </div>
            </div>
        </div>
    )
}