import React from 'react';
import { UserProfile } from './UserProfile.js';

export const Window = () => {
    return (
        <div class="container">
            <h1>KREDIT</h1>
            <div class="row">
                <div class="col-sm-3" style={style1}>
                    <UserProfile />
                </div>
                <div class="col-sm-1">
                    
                </div>
                <div class="col-sm-8" style={style1}>
                    <p>Sed ut perspiciatis...</p>
                </div>
            </div>
        </div>
    )
}

var style1 = {
    color : 'red',
    background : 'lavender'
}