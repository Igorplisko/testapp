import React from 'react';
import s from "./Navbar.module.css";

const Navbar = () => {
   return (
      <nav className={s.nav}>
         <div className={s.items}>
            <div >
               <a>Profile</a>
            </div>
            <div>
               <a>Message</a>
            </div>
            <div>
               <a>News</a>
            </div>
            <div>
               <a>Music</a>
            </div>

            <div>
               <a>Settings</a>
            </div>

            <div>
               <a>Game</a>
            </div>
         </div>
      </nav>)
}




export default Navbar