import { Link, NavLink } from "react-router-dom";
import userDefaultPhoto from "../../assets/user.png"
import logo from "../../assets/Logo 1.png"
import { useContext } from "react";
import { authContext } from "../../providers/AuthProvider";


const Navbar = () => {

    // Access Context api
    const { user, logOut } = useContext(authContext);

    // Log out messege
    const handleLogOut = () => {
        logOut()
            .then(console.log('log out successfully'))
            .catch(console.log('error occured'))
    }


    // const navLinks = <>
    //     <li><NavLink to={"/"}>Home</NavLink></li>
    //     <li><NavLink to={"/service"}>Service</NavLink></li>
    //     <li><NavLink to={"/blog"}>Blog</NavLink></li>
    //     <li><NavLink to={"/contact"}>Contact</NavLink></li>
    //     <li><NavLink to={"/login"}>Login</NavLink></li>
    // </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <NavLink to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/service"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/blog"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Blog
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/contact"}
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                                }>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <Link><img className="h-24" src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-5">
                    <li>
                        <NavLink to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/service"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Services
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/blog"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Blog
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={"/contact"}
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-400 underline font-medium" : ""
                            }>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user  && <p>{user.displayName}</p>
                }
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div >
                        {
                            user ? <div>
                                <img className="w-10 rounded-full" src={user.photoURL} alt="" />
                            </div>
                                :
                                <img src={userDefaultPhoto} />
                        }
                    </div>
                </label>
                {
                    user ? <button onClick={handleLogOut} className="btn">LogOut</button>
                        :
                        <Link className="btn" to={"/login"}>Login</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;