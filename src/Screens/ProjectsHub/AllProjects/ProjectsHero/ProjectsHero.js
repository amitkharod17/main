import React from 'react';
import "./ProjectsHero.css";
import projects_hero_img from '../../assets/projects_hero_img.svg';
import shopping_cart_svg from '../../assets/shopping_cart_svg.svg';

function ProjectsHero() {
    return (
        <div className="projects_hero">
            <img src={projects_hero_img} className='projects_hero_img' alt='projects hero img' />
            <div className='projects_hero_content'>
                <button className='btn_best_seller'>Best seller</button>
                <h1 className='projects_hero_text'>Arduino UNO</h1>
                <h2 className='projects_hero_discount_text'>5% OFF</h2>
                <img src={shopping_cart_svg} className='shopping_cart_svg' alt='projects hero img' />
            </div>
        </div>
    )
}

export default ProjectsHero;