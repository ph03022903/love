import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Menu.css';
const menu_top = [
    {
      'name': 'home',
      'link': '/'
    },
    {
      'name': 'gallery',
      'link': '/gallery'
    },
    // {
    //   'name': 'Love',
    //   'link': '/love'
    // },
  ]
export const Menu = () => {
    const url = window.location.href.split( '/' );
    const [checkMenu, setMenu] = useState(url[3]==='' ? 'home' : url[3]);
    return (
        <div className='App-menu-top'>
            <ul>
                {menu_top.map((e, key) =>
                    <li key={key} className={checkMenu === e.name ? 'is-active' : ''}><Link to={e.link} onClick={() => { setMenu(e.name) }}>{e.name}</Link></li>
                )}
            </ul>
        </div>
    )
}
