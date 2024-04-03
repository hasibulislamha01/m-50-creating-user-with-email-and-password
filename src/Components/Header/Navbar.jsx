import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <NavLink to="/" className={({isActive})=>isActive?"btn bg-cyan-200":"btn btn-ghost"}>Home</NavLink>
                    <NavLink to="/login" className={({isActive})=>isActive?"btn bg-cyan-200":"btn btn-ghost"}>Login</NavLink>
                    <NavLink to="/register" className={({isActive})=>isActive?"btn bg-cyan-200":"btn btn-ghost"}>Register</NavLink>
                    <NavLink to="/registerHero" className={({isActive})=>isActive?"btn bg-cyan-200":"btn btn-ghost"}>Register Hero</NavLink>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;