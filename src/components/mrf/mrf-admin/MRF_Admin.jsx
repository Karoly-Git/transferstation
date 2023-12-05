// React Imports
import React from 'react';
// Component Imports
import Filter from './Filter';
import Register from './Register';

export default function MrfAdmin() {
    return (
        <div className='page mrf-admin'>
            <Register />
            <Filter />
        </div>
    )
}
