import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import { CgMenuRight } from "react-icons/cg";
//import { BsChevronDown } from "react-icons/bs";
//import Avatar from "react-avatar";
//import logo from "../../images/logo.png"

export default function Header() {
    const [header, setHeader] = useState("header");
    const listenScrollEvent = () => {
        window.scrollY > 10
            ? setHeader("header2")
            : setHeader("header");
    }

    useEffect(() => {
        window.addEventListener("scroll", listenScrollEvent)
        return () =>
            window.removeEventListener('scroll', listenScrollEvent);
    }, [])
    return (
        <div className={header}>
            <div className="header-left-container">

            </div>
            <div className="header-right-container">
                <div className="header-right-wrapper">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>


                        {/*user.isLoggedIn ? (
                            <div className="header-loggedin">
                                <div
                                    className="header-loggedin-wrapper"
                                    
                                >
                                    <Avatar
                                        name={user.email}
                                        color="blue"
                                        maxInitials={2}
                                        round={true}
                                        size={window.innerWidth > 767 ? 40 : 33}
                                        className="avatar"
                                    />
                                    <BsChevronDown
                                        size={window.innerWidth < 767 ? 12 : 14}
                                        style={{ marginLeft: "5px" }}
                                    />
                                </div>
                               
                            </div>
                        ) : (
                            <>
                                <li>
                                    <Link to="/signup">Join Now</Link>
                                </li>
                                <li>
                                    <Link to="/signin" className="signin-button">
                                        Sign In
                                    </Link>
                                </li>
                            </>
                        )*/}



                        
                        <li>
                            <Link to="/signup"className="signin-button">Sign Up</Link>
                        </li>
                        <li>
                            <Link to="/signin" className="signin-button">Sign In</Link>
                        </li>
                        <li>
                            <Link to="/dash" className="signin-button">dashboard</Link>
                        </li>
                        
                        

                    </ul>
                </div>
            </div>
            <div className="menu-bar">
                <CgMenuRight cursor="pointer" />
            </div>
        </div>
    )
}
