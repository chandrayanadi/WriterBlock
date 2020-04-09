import React from 'react'
import {Footer} from './Footer.js';
import {Introduction} from './Introduction.js';
import {HomePageContent} from './HomePageContent.js';

export const Home = () => {
    return (
        <div>
            <Introduction/>
            <HomePageContent/>
            <Footer/>
        </div>
    )
}
