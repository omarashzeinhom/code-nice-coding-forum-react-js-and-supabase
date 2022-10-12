import React from 'react';
import Link from 'next/link';


const Nav = () => {
  return (
   <nav>
    <ul>
        <li><Link href='/'>Questions</Link></li>
        <li><Link href='/tags'>Tags</Link></li>


        <li><Link href='/login'>Login</Link></li>

    </ul>
   </nav>
  )
}

export default Nav
