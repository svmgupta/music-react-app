import { faMusic } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react';


const Nav = ({LibraryStatus,setLibraryStatus}) => {
    return (
        <nav>
            <h1>Waves</h1>
            <button onClick={()=>setLibraryStatus(!LibraryStatus)}> <FontAwesomeIcon icon={faMusic}/>Library</button>
        </nav>
    );
}

export default Nav;
