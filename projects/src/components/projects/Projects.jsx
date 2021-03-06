import React from 'react';
import Project from '../../models/project/Project'; 
import './Projects.css';

export default function Projects (props) {
    var EpicodePage = new Project("Epicode", "../../../images/epicode.png", "HTML, CSS, Bootstrap, Js, jQuery", "https://github.com/Royamalikzada/EpicodePage");
    var MemoryGame = new Project("Memory Game", "../../../images/memory.png", "HTML, CSS, Js", "https://github.com/Royamalikzada/MemoryGame");
    var Netflix = new Project("Netflix", "../../../images/netflix.png", "Js, ReactJs, REST API, Bootstrap ", "https://github.com/Royamalikzada/12th-week-project");
    var Blog = new Project("Blog", "../../../images/blog.png", "Js, ReactJs, WordPress API, Bootstrap ", "https://github.com/Royamalikzada/FinalProject");
    var PhpProject = new Project("E-commerce (PHP)", "../../../images/php.png", "PHP, HTML, CSS, Bootstrap", "https://github.com/Royamalikzada/PHP-project");
    var LaravelProject = new Project("E-commerce (Laravel)", "../../../images/laravel.png", "Laravel, HTML, CSS, Bootstrap", "https://github.com/Royamalikzada/Laravel-project");

    return (
        <div className='container marginDiv'>
            <hr className='selectedbtn mb-5' id='projects' />
            <h2 className='lightColor mb-5'> Projects</h2>
            <div className='row'>
                    {EpicodePage.createProject()}
                    {MemoryGame.createProject()}
                    {Netflix.createProject()}
                    {Blog.createProject()}
                    {PhpProject.createProject()}
                    {LaravelProject.createProject()}
            </div>
        </div>
    )
}