import React from 'react';
import img from './me.webp'


export default function Header() {

    return (
        <header>
            <img className='img' src={img} alt='Profile' />
            <div className='content'>
                <h1 className='heading-name'>Obiefuna Marcel</h1>
                <h3 className='heading-title'>Fullstack developer</h3>
                <button className='link-btn' >uche.com</button>
                <div className='btn-container'>
                    <button>Email</button>
                    <button>linkedIn</button>
                </div>
                <h2>About</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, atque. Perspiciatis rem consequuntur ex neque eveniet sit voluptatum doloribus, eius ipsa</p>
                <h2>Interests</h2>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, natus neque officiis, sapiente provident quod expedita repellat in necessitatibus ipsum accusan</p>
            </div>

        </header>
    );
}