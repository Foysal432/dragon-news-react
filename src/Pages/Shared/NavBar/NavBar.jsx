import { Link, NavLink } from "react-router-dom";

import userimage from '../../../assets/user.png'
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvaider";
const NavBar = () => {
  const {user, logout}=useContext(AuthContext)
    const NavLinkbar=<>
     <li> <NavLink to='/'>Home</NavLink> </li>
     <li> <NavLink to='/about'>About</NavLink> </li>
     <li> <NavLink to='/career'>Career</NavLink> </li>
      
    </>
    const handlesingout =()=>{
      logout()
      .then()
      .catch()
    }
    return (
        <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
             {
                NavLinkbar
             }
            </ul>
          </div>
       
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {
            NavLinkbar
           }
          </ul>
        </div>
        <div className="navbar-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img src={userimage}/>
        </div>
      </label>
         {
          user ?  <button onClick={handlesingout} className="btn btn-primary">Sing Out</button>
          : <Link to='/login'><button className="btn btn-primary">Login</button></Link>
         }
        </div>
      </div>
    );
};

export default NavBar;