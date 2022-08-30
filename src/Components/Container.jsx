import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default function Container() {
    return (
        <div className='container'>
            <div className='content'>
                <Header />
                <Footer />
            </div>

        </div>
    );
}