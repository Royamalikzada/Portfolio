import React from 'react';

export default function Header (props) {
    return (
        <div className='container' >
            <hr className='selectedbtn mb-5' id='header' />
            <p className='fs-3 selectedColor'>Hi, my name is </p>
            <h1 className='fs-big lightColor'>Roya Malikzada.</h1>
            <h2 className='fs-medium baseColor fst-italic'>I build things for the web.</h2>
            <div className='row'>
                <div className='col-md-6'>
                    <p className='baseColor fs-3 mb-5'>
                        I'm a software engineer obtained necessary skills to start my journey in 
                        Web Development World thank to self-study and full-stack development bootcamp course of <span className='selectedColor'>Epicode School</span>. 
                    </p>
                    <button className='selectedBtn selectedColor p-3'>Check out my final project!</button>
                </div>

            </div>
            
        </div>
    )
}