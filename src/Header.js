import React from 'react';
import './Header.css';

export default function Header() {
  return (
    <>
    <header>
        <h1 id="nav-title">ShopWell</h1>
        <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
    </header>
    </>
  )
}
